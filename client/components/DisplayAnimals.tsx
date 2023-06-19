import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchAnimals } from '../slices/animals';
import { Animal } from '../../models/animal';
import { format } from 'date-fns';

function DisplayAnimals() {
  const animals = useAppSelector((state) => state.animals as Animal[]);
  const dispatch = useAppDispatch();
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  return (
    <div className="app">
      <div id="Container">
        <h1>Persistent Paws</h1>
        <div className="scrollBar">
          {animals.map((animal: Animal) => {
            if (loadedImages[animal.id.toString()] === false) return null;

            return (
              <>
              <div className='animalCardContainer'>
              <div key={animal.id} className="pet-card">
                <img 
                  src={animal.photos[0]?.large || '/default.jpg'} 
                  alt={animal.name} 
                  onLoad={() => setLoadedImages({...loadedImages, [animal.id.toString()]: true})}
                  onError={() => setLoadedImages({...loadedImages, [animal.id.toString()]: false})}
                />
                <div className="name">{animal.name}</div>
                <div className="type">{animal.type}</div>
                <div className="breed">{animal.breeds.primary}</div>
                <div className="age">{animal.age}</div>
                <div className="date">{format(new Date(animal.published_at), 'dd/MM/yyyy')}</div>
              </div>
              </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DisplayAnimals;
