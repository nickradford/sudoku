var React = require('react');
var EasyBoard = require('./boards/easy');
var BoardLinks = require('./boardLinks');
var Router = require('./router');
var ReactRouter = require('react-router');

var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = ReactRouter;


var routes = (
  <Route handler={Game}>
    <DefaultRoute handler={EasyBoard} />
    <Route path='/' handler={Game} />
  </Route>
);

class Game extends React.Component {
  constructor() {
    this.router = new Router(routes, 'app');
  }

  componentDidMount() {
    this.router.run(this)
  }

  render() {
    return (
      <div>
        <h1>Sudoku!</h1>
        <BoardLinks/>
      </div>
    );
  }
}

module.exports = Game
