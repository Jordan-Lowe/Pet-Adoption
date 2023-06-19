import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchAnimals } from '../slices/animals';
import { Animal } from '../../models/animal';
import { format, parseISO } from 'date-fns';

function SelectAnimals() {
  const animals = useAppSelector((state) => state.animals as Animal[]);
  const dispatch = useAppDispatch();
  const [loadedImages, setLoadedImages] = useState<Record<string, number>>({});

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);


  const getImage = (animal: Animal, index: number) => {
    if (animal.photos[index]) {
      return animal.photos[index].large;
    } else {
      return '/default.jpg';
    }
  }

  return (
    <div className="app">
      <div id="Container">
        <div className="scrollBarTop">
          {animals.map((animal: Animal) => {
            const imageIndex = loadedImages[animal.id.toString()] || 0;

            if (imageIndex >= animal.photos.length) return null;

            return (
              <div className='animalCardContainer' key={animal.id}>
                <div className="pet-card">
                  <img 
                    src={getImage(animal, imageIndex)} 
                    alt={animal.name} 
                    onLoad={() => setLoadedImages({...loadedImages, [animal.id.toString()]: imageIndex + 1})}
                    onError={() => setLoadedImages({...loadedImages, [animal.id.toString()]: imageIndex + 1})}
                  />
                  <div className="name">{animal.name}</div>
                  <div className="type">{animal.type}</div>
                  <div className="breed">{animal.breeds.primary}</div>
                  <div className="age">{animal.age}</div>
                  <div className="date">{animal.published_at}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SelectAnimals;
