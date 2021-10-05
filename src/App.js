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
        PrimaryThreeLessonPage,
        ErrorPage,
        PrimaryOneAdvance,
        PrimaryTwoAdvance,
        PrimaryThreeAdvance
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

          <Route path="/advance-to-two" component={PrimaryOneAdvance} />
          <Route path="/advance-to-three" component={PrimaryTwoAdvance} />
          <Route path="/advance-to-four" component={PrimaryThreeAdvance} />

          <Route path='*' exact={true} component={ErrorPage} />
        </Switch>
      </div>
    );
}

export default Mathutor;
