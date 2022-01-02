import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import SnippetsList from "./SnippetsList"

function App(){
   return(
      <Switch>
        <Route exact={true} path="/templates" component={SnippetsList} />
      </Switch>
   )
}
export default App;
