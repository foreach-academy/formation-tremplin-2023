import SearchForm from '../components/SearchForm.jsx';
import CocktailList from '../components/CocktailList.jsx';
import { useCallback, useEffect, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCocktails = useCallback(async () => {
    setIsLoading(true);

    try {
      const resp = await fetch(`${url}${searchTerm}`);
      const { drinks } = await resp.json();

      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink: id,
            strAlcoholic: info,
            strDrinkThumb: image,
            strDrink: name,
            strGlass: glass
          } = item;

          return {
            id,
            info,
            image,
            name,
            glass
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchCocktails();
  }, [fetchCocktails]);

  return (
    <main>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CocktailList cocktails={cocktails} isLoading={isLoading} />
    </main>
  );
};

export default Home;
