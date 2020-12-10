import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import PokemonList from './PokemonListPage/PokemonList'
import SearchBar from './SearchBar';

function App()
{
  const locale = 'en'
  const [searchText, setSearchText] = React.useState('');

  function handleChange(event)
  {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <Header />
      <SearchBar onChange={handleChange}/>
      <PokemonList searchText={searchText} locale={locale}/>
    </div>
  );
  
}

export default App;
