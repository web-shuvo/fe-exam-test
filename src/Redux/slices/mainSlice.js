import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogPosts = createAsyncThunk(
    'mainSlice/getBlogPosts',
    async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let data = await response.json();

            return data;

        } catch (error) {
            return error.message
        }
    }
);


export const postDetails = createAsyncThunk(
    'mainSlice/postDetails',
    async (id) => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            let data = await response.json();

            return data;

        } catch (error) {
            return error.message
        }
    }
);
export const deletePost = createAsyncThunk(
    'mainSlice/deletePost',
    async (id) => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'delete',

            });
            let data = await response.json();
            // console.log(response);
            return data;

        } catch (error) {
            return error.message
        }
    }
);





const mainSlice = createSlice({
    name: 'rootSlice',
    initialState: {
        postArr: [],
        postDetails: {},
        loading: false,
        error: undefined
    },
    reducers: {
    },
    extraReducers: {
        [getBlogPosts.pending]: (state, action) => {
            state.loading = action.payload;
        },
        [getBlogPosts.fulfilled]: (state, action) => {
            state.postArr = action.payload
        },
        [getBlogPosts.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [postDetails.pending]: (state, action) => {
            state.loading = action.payload;
        },
        [postDetails.fulfilled]: (state, action) => {
            state.postDetails = action.payload
        },
        [postDetails.rejected]: (state, action) => {
            state.error = action.payload;
        },

    }
});


export let mainSelector = (state) => state.mainSlice;
export default mainSlice.reducer;