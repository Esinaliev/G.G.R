const {buildSchema}=require('graphql')
/*
Table genre {
  code int [pk, increment]
  genre_name varchar [pk, not null]
}

Table records {
  id int [pk, increment]
  user_id int [pk]
  game_code int [pk]
  score int
}
*/
const schema = buildSchema(`

    type User {
        id: ID
        logIn: String
        password: String
        nickname: String
        avatar: String
    }
    type Game {
        code: Int
        title: String
        genres: [Genre]
    }
    type Genre {
        code: Int
        title: String
    }

    input UserInput {
        logIn: String!
        password: String!
        nickname: String
        avatar: String
    }
    input GameInput {
        code: Int
        title: String!
        genres: [GenreInput]
    }
    input GenreInput {
        code: Int
        title: String!
    }

    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
        getAllGames: [Game]
        getGame(code: Int): Game
        getAllGenres: [Genre]
        getGenre(code: Int): Genre
    }
    
    type Mutation {
        createUser(input: UserInput): User
        createGame(input: GameInput): Game
        createGenre(input: GenreInput): Genre
    }

`)

module.exports = schema