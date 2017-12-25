const express = require("express");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");

const port = 3000;

const app = express();

const schema = buildSchema(`
    type Query {
        hello: String,
        body: Object
    }
`);

const root = {
  hello: () => "Hello world!"
};

app.use(
  "/graphql",
  graphqlHttp({
    schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
