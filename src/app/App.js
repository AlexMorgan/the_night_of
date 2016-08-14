import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router'
import Main from './components/Main.js';
import Home from './components/Home.js';
// import ResultsContainer from './containers/ResultsContainer.js';
import './styles/App.css';

var routes = (
     <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            // <Route path="/results" component={ResultsContainer} />
        </Route>
    </Router>
)


// class App extends Component {
//   render() {
//     return (
//         <Main>
//           <Button className="intro-btn btn btn-primary" btnCopy="Check Out Top 10 Threads" />
//         </Main>
//     );
//   }
// }

// export default App;

export default routes;
