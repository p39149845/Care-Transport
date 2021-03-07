const { GraphQLServer } = require('graphql-yoga')
const express = require('express')
var cors = require('cors')
const path = require('path')
var app = express()

app.use(cors())

const database = require('./utils/database')

// ***********Resolver*************
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutaions')

// ************Server**************

const server = new GraphQLServer({
    typeDefs:'./schema.graphql',
    resolvers:{
        Query,
        Mutation
    },
})

app.use(express.static('public'));

app.get('*',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'public','index.html'));
});

const PORT = process.env.PORT || 4000

const Option = {
    port: PORT,
    endpoint:'/graphql'
}

server.start(Option, ({ port }) => {
    console.log(`Server is running on port ${port} `)
})