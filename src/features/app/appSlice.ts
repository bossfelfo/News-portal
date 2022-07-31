import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  hasTopBar: localStorage.getItem('topBarState') || true
};

const appSlice = createSlice({
  name: 'topBar',
  initialState,
  reducers: {
    closeTopBar: (state, action) => {
      // state.hasTopBar = localStorage.setItem('topBarState', 'false');
    },
    setHompage: (state, action) => {
      //   state.hasTopBar = localStorage.setItem('topBarState', 'false');
    }
  }
});

export const { closeTopBar, setHompage } = appSlice.actions;

export default appSlice.reducer;
