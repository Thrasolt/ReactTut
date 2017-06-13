import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return (<div>
              <h1>To do List</h1>
            </div>
    )
  }
}


const entry = document.getElementById('app');
ReactDOM.render(<App />, entry);


/*
import { Router, Route, browserHistory , Link, IndexRoute} from 'react-router'
import { Provider } from 'react-redux'


<Router history={browserHistory} onUpdate={logPageView}>
  <Route path="/" component={MobileOpenHeader}>
    <IndexRoute component={MobileLanding}/>
  </Route>
</Router>
*/
