import express from 'express';
import * as db from './db';
import multer from 'multer';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './schema/resolvers';

db.connect();
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '/public');
  },
  filename: (req, file, cb) => {
    cb(null, +Date.now() + '--' + file.originalname);
  },
});
console.log('hi');

const upload = multer({ storage: storage });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('f'), async (req, res) => {
  try {
    if (!req.file) {
      res.send({
        status: false,
        message: 'No file uploaded',
      });
    } else {
      return res.json(req.file.filename);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
