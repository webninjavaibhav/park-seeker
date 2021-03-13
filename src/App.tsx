import './App.css';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store/store';
import Parks from './pages/Parks/Parks';
import ParkDetails from './components/ParkDetails/ParkDetails';
import NewsRelease from './components/NewsRelease/NewsRelease';

const App: FC = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Parks} />
      <Route path="/parks/:id" component={ParkDetails} />
      <Route path="/news" component={NewsRelease} />
    </Router>
  </Provider>
);

export default App;
