import React from 'react';
import { Route, Switch } from 'react-router';
import { 
        PrimaryOneTestPage, 
        PrimaryTwoTestPage, 
        PrimaryThreeTestPage,
        PrimaryFourTestPage,
        LandingPage,
        PrimaryOneLessonPage,
        PrimaryTwoLessonPage,
        PrimaryThreeLessonPage
      } from './pages';

const Mathutor = () => {  
    return (
      <div>
        <Switch>
          <Route path='/' exact component={LandingPage}  />
          <Route path='/tests/primary-one' component={PrimaryOneTestPage} />
          <Route path='/tests/primary-two' component={PrimaryTwoTestPage} />
          <Route path='/tests/primary-three' component={PrimaryThreeTestPage} />
          <Route path='/tests/primary-four' component={PrimaryFourTestPage} />

          <Route path="/lessons/primary-one" component={PrimaryOneLessonPage} />
          <Route path="/lessons/primary-two" component={PrimaryTwoLessonPage} />
          <Route path="/lessons/primary-three" component={PrimaryThreeLessonPage} />
        </Switch>
      </div>
    );
}

export default Mathutor;
