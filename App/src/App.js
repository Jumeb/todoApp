import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from './redux/reducers';
import Router from './routers/routes';

const App = () => {
  const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
