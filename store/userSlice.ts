import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { fetchUserById } from './userApi';  // Define your API function

interface UserState {
  user: any; // Define your user state shape
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async (userId: string, { rejectWithValue }) => {
  try {
    const response = await fetchUserById(userId); // Call your API function
    return response.data; // Assuming your API returns the user data
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
