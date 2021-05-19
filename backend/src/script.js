const express = require('express');
const cors = require('cors')
const { PrismaClient } = require('@prisma/client');
const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');
const path = require('path')

const prisma = new PrismaClient()


const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      return await context.prisma.users.findMany()
    },
    user: async (parent , args, context, info) => {
      const user = await context.prisma.users.findUnique({
        where: {
          id:args.id
        }
      });
      return user;
    },
    games: async (parent, args, context) => {
      return await context.prisma.games.findMany()
    },
    game: async (parent , args, context, info) => {
      const game = await context.prisma.games.findUnique({
        where: {
          id:args.id
        }
      });
      return game;
    },
    gameInfos: async (parent, args, context) => {
      return await context.prisma.gameinfo.findMany()
    },
    gameInfo: async (parent , args, context, info) => {
      const gameinfo1 = await context.prisma.gameinfo.findUnique({
        where: {
          id:args.id
        }
      });
      return gameinfo1;
    }
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const user = await context.prisma.users.create({
        data: {
          login: args.login,
          password: args.password,
          nickname: args.login
        },
      })
      console.log(args);
      return user;
    },
    updateUser: async (parent, args, context, info) => {
      const user = await prisma.users.update({
        where: {
          id: args.id
        },
        data: {
          login: args.login,
          password: args.password,
          nickname: args.nickname,
          avatar: args.avatar
        }
      });
      return user;
    },
    deleteUser: async (parent, args, context, info) => {
      const user = await context.prisma.users.delete({
        where: {
          id: args.id
        }
      });
      console.log(user);
      return user;
    },

    createGame: async (parent, args, context, info) => {
      const game = await context.prisma.games.create({
        data: {
          title: args.title
        },
      })
      console.log(args);
      return game;
    },
    updateGame: async (parent, args, context, info) => {
      const game = await prisma.games.update({
        where: {
          id: args.id
        },
        data: {
          title: args.title
        }
      });
      return game;
    },
    deleteGame: async (parent, args, context, info) => {
      const game = await context.prisma.games.delete({
        where: {
          id: args.id
        }
      });
      console.log(game);
      return game;
    },

    createGameInfo: async (parent, args, context, info) => {
      const gameinfo1 = await context.prisma.gameinfo.create({
        data: {
          game_id: args.game_id,
          description: args.description
        },
      })
      console.log(args);
      return gameinfo1;
    },
    updateGameInfo: async (parent, args, context, info) => {
      const gameinfo1 = await prisma.gameinfo.update({
        where: {
          id: args.id
        },
        data: {
          game_id: args.game_id,
          description: args.description
        }
      });
      return gameinfo1;
    },/*
    game_id Int
    description String*/
    deleteGameInfo: async (parent, args, context, info) => {
      const gameinfo1 = await context.prisma.gameinfo.delete({
        where: {
          id: args.id
        }
      });
      console.log(gameinfo1);
      return gameinfo1;
    }
  }
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, '..', '/graphql/schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: {
    prisma,
  }
});

const app = express();
app.use(cors());
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);