const express = require('express')
const {graphqlHTTP} =require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const users = []
const games = []
const genres = []

const app = express()
app.use(cors())

function createUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

const createUser = (input) => {
    const id = createUUID()
    return {
        id, ...input
    }
}
const createGame = (input) => {
    const code = games.length
    const genresCode = []
    if(input.genres!=null){
        input.genres.forEach(e => {
            if(genres.find(genre => genre.id == e.id)!=null){
                genresCode.push(e)
            }
        });
    }
    
    return {
        code,genresCode, ...input
    }
}
const createGenre = (input) => {
    const code = genres.length
    return {
        code, ...input
    }
}

const root = {
    getAllUsers: () => {
        return users
    },
    getUser: ({id}) => {
        return users.find(user=> user.id == id)
    },
    getAllGames: () => {
        return games
    },
    getGame: ({code}) => {
        return games.find(game => game.code == code)
    },
    getAllGenres: () => {
        return genres
    },
    getGenre: ({code}) => {
        return genres.find(genre => genre.code == code)
    },

    createGame: ({input}) => {
        const game = createGame(input)
        games.push(game)
        return game
    },
    createGenre: ({input}) => {
        const genre = createGenre(input)
        genres.push(genre)
        return genre
    },
    createUser: ({input}) => {
        const user = createUser(input)
        users.push(user)
        return user
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000,console.log('server started on port 5000'))