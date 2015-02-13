/* jshint devel:true */
var React = require('react');
// var Sudoku = require('./sudoku.jsx');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;


var App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
});

var Header = React.createClass({
  render() {
    return (
      <h1>Sudoku :)</h1>
    );
  }
});

var BoardLinks = React.createClass({
  render() {
    return (
      <ul>
        <li><Link to='games/easy'>Easy</Link></li>
        <li><Link to='games/medium'>Medium</Link></li>
        <li><Link to='games/hard'>Hard</Link></li>
      </ul>
    );
  }
});

var EasyGame = React.createClass({
  render() {
    return (
      <div>
        <h3>Easy</h3>
        <p>This is the easy game, <Link to='home'>go back</Link>.</p>
        <Square />
      </div>
    );
  }
});

var Square = React.createClass({
  getInitialState() {
    return {
      value: "Hello!"
    }
  },
  handleChange(event) {
    this.setState({value: event.target.value});
  },
  render() {
    var value = this.state.value;
    return (
      <div>
        <input value={value} onChange={this.handleChange}/>
        <p>{value}</p>
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Route name='home' path='/' handler={BoardLinks} />
    <Route name='games/easy' path='games/easy' handler={EasyGame} />
    <Route name='games/medium' path='games/medium' handler={EasyGame} />
    <Route name='games/hard' path='games/hard' handler={EasyGame} />
  </Route>
)

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('app'));
})

// React.render(<App/>, document.getElementById('app'));
