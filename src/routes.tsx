import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galleries from "./pages/Galleries";
import Album from "./pages/Album";
import Posts from "./pages/Posts";
import ToDos from "./pages/ToDos";
import NotFound from "./pages/NotFound";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/gallery" component={Galleries} />
        <Route path="/user/:userId/gallery" component={Galleries} />
        <Route path="/posts" component={Posts} />
        <Route path="/user/:userId/posts" component={Posts} />
        <Route path="/todos" component={ToDos} />
        <Route path="/user/:userId/todos" component={ToDos} />
        <Route path="/album/:albumId" component={Album} />
        <Route path="/user/:userId/album/:albumId" component={Album} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
