import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { RootState } from './store';

export type SiteModeType = 'default' | 'print';

export interface MainState {
  siteMode: SiteModeType;
}

const initialState: MainState = {
  siteMode: 'default',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSiteMode: (state: WritableDraft<MainState>, { payload }: PayloadAction<SiteModeType>) => {
      state.siteMode = payload;
    },
  },
});

export const {
  actions: { setSiteMode },
} = mainSlice;

export const getSiteMode = ({ main: { siteMode } }: RootState) => siteMode;

export const { reducer } = mainSlice;
