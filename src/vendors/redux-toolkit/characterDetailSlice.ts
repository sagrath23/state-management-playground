import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCharacterById as fetchCharacterByIdService } from '../../services/characterServices';


export const fetchCharacterById = createAsyncThunk(
  'characterDetail/fetchCharacterByIdStatus',
  async (characterId: string) => {
    const result = await fetchCharacterByIdService(characterId);

    console.log(result);

    return result;
  }
);

export const characterDetailSlice = createSlice({
  name: 'characterDetailSlice',
  initialState: {
    character: {
      image: '',
      name: '',
      status: '',
      gender: '',
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacterById.fulfilled, (state, action) => {
      console.log(action, 'da action');
      console.log(state, 'da state');

      state.character = action.payload;
    })
  }
});

export default characterDetailSlice.reducer;
