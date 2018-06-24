const { GraphQLServer } = require('graphql-yoga');

// moved to schema.graphql
// const typeDefs = `
//     type Query {
//         info: String!
//         feed: [Link!]!
//     }
// // ! means don't accept null. will ALWAYS be a string

// type Mutation {
//     post(url: String!, description: String!): Link!
// }

// type Link {
//     id: ID!
//     description: String!
//     url: String!
// }
// `


let links = [{
    id: 'link-0',
    url: 'www.imgur.com',
    description: 'Fullstack tutorial for GraphQL'
}]




let idCount = links.length
const resolvers = {
	Query: {
		info: () => `This is your API string interpolation these are backticks Marisha!`,
		feed: () => links,
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
    },
};


const server = new GraphQLServer ({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`(♥_♥) PARTY ON PORT 4000 (♥_♥)`));


