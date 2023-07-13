import SearchForm from '../components/SearchForm.jsx';
import CocktailList from '../components/CocktailList.jsx';

const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const Home = () => {
  // state - cocktails
  // state - isLoading
  // state - searchTerm

  // useEffect - dépendance [searchTerm]
  // fetch cocktails - concaténer url + searchTerm

  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
