import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Post } from '@/shared/types';

type PostData = Post[]

export const loadAllPosts= createAsyncThunk(
    'posts/loadAllPosts',
    async () => {
        const data = await fetch('https://www.reddit.com/r/pics/.json');
        const json = await data.json();

        return json.data.children as PostData;
    }
);



interface PostsState {
    posts: Post[],
    isLoadingPosts: boolean,
    hasError: boolean,
}

const initialState: PostsState = {
    posts: [],
    isLoadingPosts: false,
    hasError: false
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadAllPosts.pending, (state) => {
                state.isLoadingPosts = true;
                state.hasError = false;
            })
            .addCase(loadAllPosts.fulfilled, (state, action) => {
                state.isLoadingPosts = false;
                state.posts = action.payload;
            })
            .addCase(loadAllPosts.rejected, (state, action) => {
                state.isLoadingPosts = false;
                state.hasError = true;
                state.posts = [];
            })
    },
});

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const isLoadingPosts = (state: RootState) => state.posts.isLoadingPosts;

export default postsSlice.reducer;
