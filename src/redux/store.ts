import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './api/products/productAPI'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    authSice: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware]),

})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch