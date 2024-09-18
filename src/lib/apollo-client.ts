import { gql, useQuery } from '@apollo/client';

// Define your query
const GET_PSYCHOLOGISTS = gql`
  query GetPsychologists {
    psychologists {
      id
      name
      feedback
    }
  }
`;