// import React from 'react';
// import { Route } from 'react-router';

// export default (
//     <Route>
//       <Route path='/' />
//       <Route path='/page-1' />
//       <Route path='/page-2' />
//       <Route path='/project/:id' />
//     </Route>
// );

import React from 'react';
// import { Route } from 'react-router';
import { Route } from 'react-router-dom';
// import Project from "./pages/Project";
import PageOne from "./pages/Page1";
import PageTwo from "./pages/Page2";

export default (
    <Route>
      <Route exact path='/page-1' component={PageOne}/>
      <Route exact path='/page-2' component={PageTwo}/>
      {/* <Route path={'/project/:id'} component={Project}/> */}
    </Route>
);