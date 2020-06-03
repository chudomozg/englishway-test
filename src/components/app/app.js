import React from "react";
import { compose } from "redux";
import { ServiceProvider } from "../service-context";

import Test from "../test";

import EnglishWayService from "../../services/englishway-service";

const App = () => {
  const service = new EnglishWayService();
  return (
    <ServiceProvider value={service}>
      <Test />
    </ServiceProvider>
  );
};

export default App;
