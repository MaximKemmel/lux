import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IMainState {
  isNoScroll: boolean;
}

const initialState: IMainState = {
  isNoScroll: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setIsNoScroll(state, action: PayloadAction<boolean>) {
      state.isNoScroll = action.payload;
    },
  },
});

export const { actions, reducer } = mainSlice;
