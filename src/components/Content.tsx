import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';
import { Header } from './Header';

// @props
// MovieProps <- from src/@types/movie.d.ts
// GenreResponseProps <- from src/@types/genre.d.ts

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ selectedGenre, movies }: ContentProps) {
  // Complete aqui
  return (
    <div className='container'>
      <Header selectedGenreTitle={selectedGenre.title} />

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
