import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <div className="wrap">
      <HashRouter>
        <header>
          <Link to='/'><h1>MOVIE LIST</h1></Link>
        </header>
        <Route path="/" exact={true} component={Home} />
        <Route path="/movie/:id" component={Detail} />
      </HashRouter>
    </div>
  );
}

export default App;