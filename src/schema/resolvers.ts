import Coffee from '../models/Coffee';

export interface Coffe {
  description?: string;
  id: string;
  image?: string;
  name?: string;
  price?: number;
}

export const resolvers = {
  Mutation: {
    createCoffee: async (parent: any, args: Coffe) => {
      try {
        const response = await Coffee.create(args);
        return response;
      } catch (error) {
        console.error(error);
      }
    },
    deleteCoffee: (parent: any, args: Coffe) => {
      Coffee.destroy({ where: { id: args.id } });
      return 'Coffee Deleted Successfully';
    },
    updateCoffee: async (parent: any, args: Coffe) => {
      try {
        const response = await Coffee.findByPk(args.id);
        response?.update({ ...args });
        return response;
      } catch (error) {
        console.error(error);
      }
    },
  },
  Query: {
    getCoffee: async () => {
      try {
        const response = await Coffee.findAll({ raw: true });
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    getCoffeeByID: async (parent: any, args: Coffe) => {
      try {
        const response = await Coffee.findByPk(args.id);
        return response;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
