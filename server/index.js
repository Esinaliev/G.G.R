const express = require('express')
const {graphqlHTTP} =require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const users = [{id: "fe78de24-d0ec-4bdc-861d-fccc2cc28bbc",logIn: "GranullBoy",password: "qwerty123",nickname: "Arsen",avatar: null}]
const games = [{ code: 0, title: "snake", path:"./Games/Snake", genres: [{code: 1, title: "8-Bit"}]}]
const genres = [{code:1,title:"8-Bit"}]
const records = [{id: "1", user_id: {id: "fe78de24-d0ec-4bdc-861d-fccc2cc28bbc", logIn: "GranullBoy", nickname: "Arsen", password: "qwerty123", avatar: null}, game_code: {code: 0, title: "snake", path:"./Games/Snake", genres: [{title: "8-Bit", code: 1}]}, score: 100, time: null}]

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

function getGame(code){ return games.find(game => game.code == code) }
function getUser(id){ return users.find(user=> user.id == id) }

const createUser = (input) => {
    const id = createUUID()
    const nickname = input.login
    return { id, nickname, ...input } 
}
const createGame = (input) => {
    const code = games.length
    const genresCode = []
    if(input.genres!=null){
        input.genres.forEach(e => {
            if(genres.find(genre => genre.code == e.code)==null){
                genresCode.push(genres.find(genre => genre.id == e.id))
            }
        });
        input.genres=genresCode;
    }
    return { code, ...input }
}
const createGenre = (input) => {
    const code = genres.length
    return { code, ...input }
}
const createRecord = (input) => {
    const id = genres.length
    input.user_id = getUser(input.user_id)
    input.game_code = getGame(input.game_code)
    return { id, ...input }
}


const root = {
    getAllUsers: () => { return users },
    getUser: ({id}) => { return users.find(user=> user.id == id) },
    getAllGames: () => { return games },
    getGame: ({code}) => { return games.find(game => game.code == code) },
    getAllGenres: () => { return genres },
    getGenre: ({code}) => { return genres.find(genre => genre.code == code) },
    getAllRecords: () => { return records },
    getRecord: ({id}) => {  return records.find(record => record.id == id) },

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
    },
    createRecord: ({input}) => {
        const record = createRecord(input)
        records.push(record)
        return record
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000,console.log('server started on port 5000'))