import { Route, Switch } from "react-router-dom";
import { route } from './router';

function App() {
  return (
    <div>
      <Switch>
        {route.map((item, index) => <Route
          key={index}
          path={item.path}
          exact={item.exact}
          render={props => item.render(props)}
        />)}
      </Switch>
    </div>
  );
}

export default App;
