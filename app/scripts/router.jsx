var ReactRouter = require('react-router');

var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = ReactRouter;

class Router {
  run() {
    this.router.run(this.routes, (Handler) => {
      React.render(<Handler/>, document.getElementById(this.inceptionPoint))
    })
  }
  constructor(routes, inceptionPoint) {
    this.router = ReactRouter.create()
    this.routes = routes;
    this.inceptionPoint = inceptionPoint
  }

};

module.exports = Router;