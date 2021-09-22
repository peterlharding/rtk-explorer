
import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk} from '@reduxjs/toolkit';

import {Comment} from '../../models/comment';
import {RootState} from '../../app/store';

export const url = 'https://jsonplaceholder.typicode.com/comments?_limit=10';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (_, {rejectWithValue}): Promise<Comment[]> => {
    // const data =  await fetch(url).then(res => res.json());
    const response = await fetch(url);
    const data =  await response.json();
    console.log(data);
    // dispatch(setAllComments(data));
    return (response.ok) ? data : rejectWithValue(data);
  }
);


const commentsAdaptor = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
});


const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdaptor.getInitialState({loading: false, status: 'undefined'}),
  reducers: {
    setAllComments: commentsAdaptor.setAll,
  },
  extraReducers: {
    // [fetchComments.pending](state: RootState, action: PayloadAction<Comment[]>) {
    //   state.loading = true;
    //   state.status = 'pending';
    // },
    // [fetchComments.fulfilled] (state: RootState, action: PayloadAction<Comment[]>) {
    //   state.loading = false;
    //   commentsAdaptor.setAll(state, action.payload);
    //   state.status = 'fulfilled';
    // },
    // [fetchComments.rejected](state) {
    //   state.loading = false;
    //   state.status = 'rejected';
    // }
  }
})

export const selectComments = (state: RootState) => state.comments;

const commentsSelectors = commentsAdaptor.getSelectors();

export const {
  selectIds,
  selectById,
  // SelectTotal,
  selectEntities,
  selectAll
} = commentsSelectors;

export const {setAllComments} = commentsSlice.actions;

export default commentsSlice.reducer;

