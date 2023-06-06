import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEX_PUBLIC_GRAPHCMS_ENDPOINT;

export default function commentsAPI(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env}`,
    },
  });
}
