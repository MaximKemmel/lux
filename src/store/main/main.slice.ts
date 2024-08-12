import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IMainState {
  isNoScroll: boolean;
  selectedService: number;
  selectedApartament: number;
}

const initialState: IMainState = {
  isNoScroll: false,
  selectedService: 0,
  selectedApartament: 0,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setIsNoScroll(state, action: PayloadAction<boolean>) {
      state.isNoScroll = action.payload;
    },
    setSelectedService(state, action: PayloadAction<number>) {
      state.selectedService = action.payload;
    },
    setSelectedApartament(state, action: PayloadAction<number>) {
      state.selectedApartament = action.payload;
    },
  },
});

export const { actions, reducer } = mainSlice;
