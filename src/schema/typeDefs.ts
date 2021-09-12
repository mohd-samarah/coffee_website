import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Coffe {
    createdAt: String
    description: String
    id: ID!
    image: String
    name: String
    price: Float
    updatedAt: String
  }
  type Query {
    getCoffee: [Coffe!]
    getCoffeeByID(id: String!): Coffe!
  }

  type Mutation {
    createCoffee(
      description: String
      image: String
      name: String
      price: Float
    ): Coffe!
    deleteCoffee(id: String): String
    updateCoffee(
      description: String
      id: String!
      image: String
      name: String
      price: Float
    ): Coffe!
  }
  schema {
    mutation: Mutation
    query: Query
  }
`;
