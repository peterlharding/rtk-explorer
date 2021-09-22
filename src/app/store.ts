
import {configureStore, ThunkAction, Action, Store} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query'

import commentsReducer from '../features/comments/commentsSlice';

export const store: Store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;