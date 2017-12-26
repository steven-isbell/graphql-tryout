const { buildSchema } = require("graphql");
const graphqlHttp = require("express-graphql");
const axios = require("axios");
const quote = require("../quotes");

const schema = buildSchema(`
    type Query {
        quote: String,
    }
`);

const root = {
  quote: async () => {
    const r = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
    );
    return JSON.stringify(r.data);
  }
};

module.exports = graphqlHttp({
  schema,
  rootValue: root,
  graphiql: true
});
