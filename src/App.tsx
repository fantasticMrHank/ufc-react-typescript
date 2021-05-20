import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';
import New from './components/AddFighter';
import Header from './components/Header';
import Home from './components/Home';
import WeightClassGroup from './components/WeightClassGroup'
import { getWeightClasses } from './store/fighterSlice';

export interface AppProps {

}

const App: React.FC<AppProps> = () => {


  return (
    <div className='main-container'>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/weightclasses/:id">
          <WeightClassGroup />
        </Route>
        <Route path="/add">
          <New />
        </Route>
      </Switch>
    </div>
  );
}

export default App;