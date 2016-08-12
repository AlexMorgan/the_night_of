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

# General Notes
the render(){} method is reserved for React components only.
If you want to create a stateless functional component you can do so below
