import { gql } from "@apollo/client";

export const TOPIC_QUERY = gql`
  query getTopics($topic: String!) {
    topic(name: $topic) {
      name
      stargazerCount
      relatedTopics {
        name
        stargazerCount
      }
    }
  }
`;
