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
  const [language, setlanguage] = React.useState('fr');

  function handleChange(event)
  {
    setSearchText(event.target.value);
  }

  

  return (
    <div>
      <Header OnLanguageChange={setlanguage}/>
      <SearchBar onChange={handleChange}/>
      <PokemonList searchText={searchText} locale={locale} language={language}/>
    </div>
  );
  
}

export default App;
