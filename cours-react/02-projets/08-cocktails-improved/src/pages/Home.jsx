import SearchForm from '../components/SearchForm.jsx';
import CocktailList from '../components/CocktailList.jsx';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const cocktailsUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('searchTerm') || '';
  const { data } = await axios(`${cocktailsUrl}${searchTerm}`);
  return { drinks: data.drinks, searchTerm };
};

const Home = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <main>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList cocktails={drinks} />
    </main>
  );
};

export default Home;
