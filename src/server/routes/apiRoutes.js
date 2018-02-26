import { schema, root } from '../graphQl/schema';
const graphqlHttp = require('express-graphql');

const router = require('express').Router();

router.use('/graphql', graphqlHttp({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

module.exports = router;
