import React from "react";
import { compose } from "redux";
import { ServiceProvider } from "../service-context";

import QuestionList from "../question-list";
import Total from "../total";

import applWithEwStruct from "../hoc/app-with-ew-structure";
import EnglishWayService from "../../services/englishway-service";

const App = () => {
  const service = new EnglishWayService();
  return (
    <ServiceProvider value={service}>
      <div className="App row">
        <QuestionList />
        <Total />
      </div>
    </ServiceProvider>
  );
};

// export default App;
export default compose(applWithEwStruct())(App);
