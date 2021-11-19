import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css'


const App = () => {

  const APP_ID = '3b6dc47b';
  const APP_KEY = 'a9c8f392c9d3534f0dc984e996194c47';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('yogurt')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }


  return (
    <div>
      <form className="form-container" onSubmit={getSearch}>
        <input type="text" value={search} onChange={handleSearch}/>
        <button type="submit">Search</button>
      </form>
      <div className="recipe-container">
        {recipes.map(recipe => (
            <Recipe
            key={recipe.recipe.label} 
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />     
        ))}
      </div>
    </div>
  )
}

export default App;
