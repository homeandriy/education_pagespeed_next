// Hooks
import { useCountries } from './hooks/useCountries';

export const Countries = () => {
  const { countries } = useCountries();

  const CountriesJSX = countries && countries.map(({ code, name }) => (
    <li key={code}>
      {name}
    </li>
  ));

  return (
    <>
      <h1>Countries</h1>
      {CountriesJSX}
    </>
  )
}