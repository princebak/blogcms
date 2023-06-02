import { request, gql } from "graphql-request";

const graphqlAPI =
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ||
  "https://api-eu-west-2.hygraph.com/v2/cli9gnyx30khd01td2sz610go/master";

export const getPosts = async () => {
  const query = gql`
    query Asset {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            categories {
              name
              slug
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
