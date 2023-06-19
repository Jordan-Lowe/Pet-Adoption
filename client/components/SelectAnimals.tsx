import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchAnimals } from '../slices/animals';
import { Animal } from '../../models/animal';
import { format } from 'date-fns';

function SelectAnAnimal() {
    const animals = useAppSelector((state) => state.animals as Animal[]);
  const dispatch = useAppDispatch();
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  return (
    <>
  {animals.map((animal: Animal) => {
    if (loadedImages[animal.id.toString()] === false) return null;
    </>
  )
}

export default SelectAnAnimal