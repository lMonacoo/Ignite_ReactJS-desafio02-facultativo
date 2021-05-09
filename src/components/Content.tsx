import { useContext } from 'react';
import { Global } from '../App';
import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';
import { Header } from './Header';

export function Content() {
  // Complete aqui
  const { movies } = useContext(Global);

  return (
    <div className='container'>
      <Header />

      <main>
        <div className='movies-list'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
