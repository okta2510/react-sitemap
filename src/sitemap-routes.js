import React from 'react';
import { Route } from 'react-router';

export default (
    <Route>
      <Route path='/' />
      <Route path='/page-1' />
      <Route path='/page-2' />
      <Route path='/project/:id' />
    </Route>
);