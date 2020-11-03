import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./Navigation/Navigation";

// import HomePage from "../pages/HomePage";
// import Movies from "../pages/Movies";
// import MovieDetailsPage from "../pages/MovieDetailPage";

const HomePage = lazy(() => import(`../pages/HomePage`));
const Movies = lazy(() => import(`../pages/Movies`));
const MovieDetailsPage = lazy(() => import(`../pages/MovieDetailPage`));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Suspense fallback={`Loading.........`}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
            <Route path="/movies" component={Movies} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
