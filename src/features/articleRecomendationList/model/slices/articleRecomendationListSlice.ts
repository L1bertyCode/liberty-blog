import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleRecomendationListSchema } from '../types/articleRecomendationListSchema';

const initialState: ArticleRecomendationListSchema = {
    
};

export const articleRecomendationListSlice = createSlice({
    name: 'articleRecomendationList',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: articleRecomendationListActions } = articleRecomendationListSlice;
export const { reducer: articleRecomendationListReducer } = articleRecomendationListSlice;