import { createSlice } from '@reduxjs/toolkit';

type AppState = {
  hasTopBar: string | boolean;
  isOpenMobileNav: boolean | string;
};
const initialState = {
  hasTopBar: localStorage.getItem('topBarState') || true,
  isOpenMobileNav: true
} as AppState;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    closeTopBar: (state) => {
      state.hasTopBar = false;
      localStorage.setItem('topBarState', 'false');
    },
    closeMobileNav: (state) => {
      state.isOpenMobileNav = !state.isOpenMobileNav;
    }
  }
});

export const { closeTopBar, closeMobileNav } = appSlice.actions;

export default appSlice.reducer;
