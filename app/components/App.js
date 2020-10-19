import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import PostsContainer from "./PostsContainer";
import User from './User';
import ThemeContext from "../contexts/theme";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("Therme ajfdoih");
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Fragment>
      <Router>
        <ThemeContext.Provider>
          <div className={theme}>
            <Nav toggleTheme={toggleTheme} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <PostsContainer postType="top" />}
              />
              <Route
                path="/new"
                render={() => <PostsContainer postType="new" />}
              />
              <Route path="/user" component={User} />
            </Switch>
          </div>
        </ThemeContext.Provider>
      </Router>
    </Fragment>
  );
};
