import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';
import postsReducer from './slices/postsSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
