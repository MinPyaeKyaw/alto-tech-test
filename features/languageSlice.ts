import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

// declaring the types for our state
export type LanguageState = {
  value: string;
};

const initialState: LanguageState = {
  value: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,

  reducers: {
    change: (state) => {
        if(state.value === 'en') {
            state.value = 'th';
        }else if (state.value === 'th') {
            state.value = 'en';
        }else {
            state.value = 'en';
        }
    }
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
  change
} = languageSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectLanguage = (state: RootState) => state.language.value;

// exporting the reducer here, as we need to add this to the store
export default languageSlice.reducer;