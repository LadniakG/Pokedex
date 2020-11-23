
import './App.css';
import Header from './common/Header';
import PokemonList from './PokemonListPage/PokemonList'

function App()
{
  return (
    <div>
      <Header />
      <div>
        <PokemonList/>
      </div>
    </div>
  );
  
}

export default App;
