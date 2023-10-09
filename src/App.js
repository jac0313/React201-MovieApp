import './App.css';
import{ useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SearchView from './components/SearchView'
import AboutView from './components/AboutView'
import { Switch, Route } from 'react-router-dom'
import MovieView from './components/MovieView'
import PageNotFound from './components/PageNotFound'
import ListView from './components/ListView'
import Footer from './components/Footer';
import ContactView from './components/ContactView';


function App() {
const [searchResults, setSearchResults]= useState([])
const [searchText, setSearchText] = useState('')

useEffect(()=> {
  if(searchText){
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=267c28afad418890f877e7f790b0fda9&language=en-US&query=${searchText}&page=1&include_adult=false`)
  .then(response => response.json())
  .then(data => {
    setSearchResults(data.results)
  })
}
}, [searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText = {setSearchText}/>
      <Switch>
        <Route path="/"exact>
          <Home/>
        </Route>
        <Route path="/about" component={AboutView}/>
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView}/>
        <Route path="/list" component={ListView}/>
        <Route path="/contact" component={ContactView}/>
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
