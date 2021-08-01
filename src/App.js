import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { route } from './router';

function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Switch>
          {route.map((item, index) => <Route
            key={index}
            path={item.path}
            exact={item.exact}
            render={props => item.render(props)}
          />)}
        </Switch>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
