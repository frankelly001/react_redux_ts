import { ordered as cakeOrdered } from '../cake/cakeSlice'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    numOfIceCreams: number
}

const initialState: InitialState = {
    numOfIceCreams: 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfIceCreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state, actions) => {
    //         state.numOfIceCreams--
    //     }
    // }
    extraReducers: (builders) => {
        builders.addCase(cakeOrdered, (state, action)=>{
            state.numOfIceCreams--
        })
    }
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions