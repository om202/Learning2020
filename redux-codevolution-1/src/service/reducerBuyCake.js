import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: {
            cakeValue: 10,
            refillValue: 1
        },
        reducers: {
            buy: (state) => {
                if (state.cakeValue > 0) {
                    state.cakeValue = state.cakeValue - 1;
                } else {
                    state.cakeValue = 0;
                }
            },
            inputRefill: (state, refill) => {
               state.refillValue = refill.payload;
            } ,
            add: (state) => {
                state.cakeValue += state.refillValue;
            }
        }
    }
);

export const { buy, inputRefill, add } = counterSlice.actions
export const counterReducer = counterSlice.reducer;