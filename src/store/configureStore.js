import { configureStore } from '@reduxjs/toolkit';
import instrumentsReducer from '../reducers/instrumentsSlice';
import usersReducer from '../reducers/usersSlice';
import guitarsReducer from '../reducers/guitarsSlice';
import bassGuitarsReducer from '../reducers/bassGuitarsSlice';
import drumkitReducer from '../reducers/drumkitSlice';
import snaresReducer from '../reducers/snaresSlice';
import cymbalsReducer from '../reducers/cymbalsSlice';
import listReducer from '../reducers/filterSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    instruments: instrumentsReducer,
    guitars: guitarsReducer,
    bassGuitars: bassGuitarsReducer,
    drumkits: drumkitReducer,
    snares: snaresReducer,
    cymbals: cymbalsReducer,
    list: listReducer,
  },
});
