import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" component={StreamList} exact />
        <Route path="/streams/new" component={StreamCreate} exact />
        <Route path="/streams/edit" component={StreamEdit} exact />
        <Route path="/streams/delete" component={StreamDelete} exact />
        <Route path="/streams/show" component={StreamShow} exact />
      </BrowserRouter>
    </div>
  );
};

export default App;
