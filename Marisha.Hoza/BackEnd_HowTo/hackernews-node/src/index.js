const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

// const typeDefs = `
// type Query {
//     info: String!
//     feed: [Link!]!
// }

// type Mutation {
//     post(url: String!, description: String!): Link!
// }

// type Link {
//     id: ID!
//     description: String!
//     url: String!
// }
// `


// let links = [{
//     id: 'link-0',
//     url: 'www.howtographql.com',
//     description: 'Fullstack tutorial for GraphQL'
// }]

// let idCount = links.length

const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: (root, args, context, info) => {
            return context.db.query.links({}, info)
        },
    },
    Mutation: {
        post: (root, args, context, info) => {
            return context.db.mutation.createLink({
                data: {
                    url: args.url,
                    description: args.description,
                },
            }, info)
        },
    },
}




const server = new GraphQLServer({
	typeDefs: '../src/schema.graphql',
	resolvers,
	context: req => ({
		...req,
		db: new Prisma({
			typeDefs: '../src/generaged/prisma.graphql',
			endpoint: 'https://us1.prisma.sh/marisha-20738f/hackernews-node/dev',
            secret: 'mysecret123',
            debug: true,
		}),
	}),
})

server.start(() => console.log(`Server is running on http://localhost:4000 ¯\_(ツ)_/¯`));