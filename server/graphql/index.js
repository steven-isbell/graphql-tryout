const { buildSchema } = require("graphql");
const graphqlHttp = require("express-graphql");
const quote = require("../quotes");

const schema = buildSchema(`
    type Query {
        quote: String,
    }
`);

const root = {
  quote: () => JSON.stringify(quote)
};

module.exports = graphqlHttp({
  schema,
  rootValue: root,
  graphiql: true
});
