import React from 'react';
import { Route, Switch } from 'react-router';
import { PrimaryOneTestPage, 
        PrimaryTwoTestPage, 
        PrimaryThreeTestPage,
        LandingPage,
      PrimaryOneLessonPage } from './pages';

const Mathutor = () => {  
    return (
      <div>
        <Switch>
          <Route path='/' exact component={LandingPage}  />
          <Route path='/tests/primary-one' component={PrimaryOneTestPage} />
          <Route path='/tests/primary-two' component={PrimaryTwoTestPage} />
          <Route path='/tests/primary-three' component={PrimaryThreeTestPage} />
          <Route path="/lessons/primary-one" component={PrimaryOneLessonPage} />
        </Switch>
      </div>
    );
}

export default Mathutor;
