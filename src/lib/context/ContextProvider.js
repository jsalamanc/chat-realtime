'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/context/store';

export const ContextProvider = ({
    children
}) => {
    return <Provider store={store}>{children}</Provider>;
};
