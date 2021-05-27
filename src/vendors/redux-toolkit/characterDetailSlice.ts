import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCharacterById as fetchCharacterByIdService } from '../../services/characterServices';


export const fetchCharacterById = createAsyncThunk(
  'characterDetail/fetchCharacterByIdStatus',
  async (characterId: string) => {
    if(characterId) {
      const result = await fetchCharacterByIdService(characterId);

      return result;
    }
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
      state.character = action.payload;
    })
  }
});

export default characterDetailSlice.reducer;
