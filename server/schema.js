const {buildSchema}=require('graphql')
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
    type Record {
        id: ID
        user_id: User
        game_code: Game
        score: Int
        time: String
    }

    input UserInput {
        logIn: String!
        password: String!
        nickname: String
        avatar: String
    }
    input GameInput {
        title: String!
        genres: [GenreInput]
    }
    input GenreInput {
        code: ID!
        title: String
    }

    input RecordInput {
        user_id: User!
        game_code: Game!
        score: Int
        time: String
    }

    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
        getAllGames: [Game]
        getGame(code: Int): Game
        getAllGenres: [Genre]
        getGenre(code: Int): Genre
        getAllRecords: [Record]
        getRecord(id: ID): Record
    }
    
    type Mutation {
        createUser(input: UserInput): User
        createGame(input: GameInput): Game
        createGenre(input: GenreInput): Genre
        createRecord(input: RecordInput): Record
    }

`)

module.exports = schema