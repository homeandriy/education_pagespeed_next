// Core
import { useQuery } from '@apollo/react-hooks';

// Other
import queryCountries from './gql/queryCountries.graphql';

export const useCountries = () => {
  const { data } = useQuery(queryCountries, {
    fetchPolicy: 'cache-only',
  });

  return {
    countries: data ? data.countries : null,
  };
};