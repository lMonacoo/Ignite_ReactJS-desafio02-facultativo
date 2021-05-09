import { useContext } from 'react';
import { Global } from '../App';
import '../styles/header.scss';

export function Header() {
  const { selectedGenre } = useContext(Global);

  return (
    <header>
      <span className='category'>
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
