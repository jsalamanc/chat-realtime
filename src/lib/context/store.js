import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers/reducers';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        reducers
    }
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
