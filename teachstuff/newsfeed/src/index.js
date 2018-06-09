const { GraphQLServer } = require('graphql-yoga');

let links = [{
    id: 'link-0',
    url: 'www.imgur.com',
    description: 'working our way towards fullstack'
}]

let idCount = links.length
const resolvers = {
    Query: {
        info: () => 'api as a lifestyle',
        feed: () => links
    },
    Mutation: {
        post: (root, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start(() => console.log(`server is running on http://localhost:4000`))