import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchAnimals } from '../slices/animals';
import { Animal } from '../../models/animal';
import { format } from 'date-fns';

import DisplayAnimals from './DisplayAnimals';

function App() {
  return (
    <div className='app'>
      <DisplayAnimals />
    </div>
  )
}

export default App;
