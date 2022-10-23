import {configureStore} from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
// import reduxLogger from 'redux-logger'
// const cakeReducer = require('../features/cake/cakeSlice')
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/iceCream/iceCreamSlice'
import userReducer from '../features/user/userSlice'
// const iceCreamReducer = require('../features/iceCream/iceCreamSlice')
// const userReducer = require('../features/user/userSlice')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer:  {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(logger)
})



export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch