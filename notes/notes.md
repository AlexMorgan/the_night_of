# Notes

## Rest and Spread Properties
Rest properties allow you to extract the remaining properties from an object into a new object. It excludes every other property listed in the destructuring pattern.

```javascript
var { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }
```

## React Router
At its heart React Router is simply a component
```
render(<Router/>, document.getElementById('app'))
```

## React Router

### IndexRoutes
To illustrate the use case for why we would use ReactRouter's IndexRoutes:

```javascript
<Router>
  <Route path="/" component={App}>
    <Route path="accounts" component={Accounts}/>
    <Route path="statements" component={Statements}/>
  </Route>
</Router>
```

When a user visits the index page of this app ('/') React will render the App component, but since we're not nesting any other components within the App component Route, {this.props.children} will be undefined. In order to resolve this issue, we could do something like:

```javascript
{this.props.children || <Home/>}
```

The only issue with this is that now the Home component won't be able to participate in React's routing. However, if we include `<IndexRoute component={Home}/>` App can render `{this.props.children}` and we have a first-class route for Home that can participate in routing.


## General Notes
the render(){} method is reserved for React components only.
If you want to create a stateless functional component you can do so below
