import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

//creating the context
import { createContext } from 'react';

interface GlobalData {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export const Global = createContext({} as GlobalData);

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Global.Provider value={{ selectedGenreId, setSelectedGenreId }}>
        <SideBar />
        <Content />
      </Global.Provider>
    </div>
  );
}
