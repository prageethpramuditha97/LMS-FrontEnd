import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface linkState {
  link: string;
}

const initialState: linkState = {
  link: '',
};

export const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {
    setLink: (state, action: PayloadAction<string>) => {
        state.link = action.payload;
    },
  },
});

export const { setLink } = linkSlice.actions;
export default linkSlice.reducer;
