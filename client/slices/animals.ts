import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAnimals } from '../apis/animals'
import { Animal } from '../../models/animal'

export const fetchAnimals = createAsyncThunk('animals/fetchAnimals', async () => {
  return await getAnimals()
})

const slice = createSlice({
  name: 'animals',
  initialState: [] as Animal[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnimals.fulfilled, (_, action: PayloadAction<Animal[]>) => {
      return action.payload
    })
  },
})

export default slice.reducer
