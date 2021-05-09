import { Button } from './Button';
import '../styles/sidebar.scss';

// @props
// MovieProps <- from src/@types/movie.d.ts
// genreStateProps <- from src/@types/genre.d.ts

interface SideBarProps {
  genres: genreStateProps[]
  selectedGenreId: number
  onClick: (id:number)=> void;
}

export function SideBar({genres, selectedGenreId, onClick}: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onClick(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}