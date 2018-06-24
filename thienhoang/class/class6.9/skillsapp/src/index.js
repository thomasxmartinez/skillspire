const {GraphQLServer} = require('graphql-yoga');

const typeDefs = `
    type Query {
        info: String!
    }
`
const resolvers = {
    Query: {
        info: () => ` this is your API thses are backticks`
    }
}

const server = new GraphQLServer ({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`(T_T) PART ON PORT 4000`))