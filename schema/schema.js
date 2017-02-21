const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString},
    age: { type: GraphQLInt},
  }
});

