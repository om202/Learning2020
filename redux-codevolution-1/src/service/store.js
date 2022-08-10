import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducerBuyCake';

export const store = configureStore(
    {
        reducer: {
            counter: counterReducer,
        },
    }
);


