import "./App.css";
import { Switch, Route } from "react-router-dom";
import AppBar from "./component/AppBar/AppBar";
import Home from "./component/Pages/Home/Home";
import Movies from "./component/Pages/Movies/Movies";
import NotFoundView from "./views/NotFoundView";
import MovieDetailsPage from "./component/MovieDetailsPage/MovieDetailsPage";
function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/movies/:movieId/:action?">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}
export default App;
