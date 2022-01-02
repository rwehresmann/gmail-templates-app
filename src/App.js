import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import SnippetsList from "./SnippetsList";
import NewSnippet from "./NewSnippet";

function App(){
   return(
      <Switch>
        <Route exact={true} path="/templates" component={SnippetsList} />
        <Route exact={true} path="/templates/new" component={NewSnippet} />
      </Switch>
   )
}
export default App;
