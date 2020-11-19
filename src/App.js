import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, React } from 'react';
import Display from './views/Display';
import NowPlaying from './views/NowPlaying';
import TrendingMovies from './views/TrendingMovies';
import { Router, Link } from '@reach/router';

function App() {

  const [search, setSearch] = useState([])

  return (
    <>
      <div className="App">
        <div className='titleBar d-flex flex-row'>
          <Link to={'/'}><img alt='Database logo' width='70' src='Martialartfilm.png' /></Link>
          <h1 className='m-1 d-flex align-items-center'>Movie Database API</h1>
          <Link className="btn btn-secondary m-3" to={`/nowplaying`}>Now Playing Movies</Link>
          <Link className="btn btn-secondary m-3" to={`/trending`}>Weekly Trending Movies</Link>
        </div>
      </div>
      <input
        className='searchBar m-2'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for Movies Here" />
      <Router>
        <Display path='/' search={search} />
        <NowPlaying path='/nowplaying' search={search} />
        <TrendingMovies path='/trending' search={search}/>
      </Router>
    </>
  );
}

export default App;
