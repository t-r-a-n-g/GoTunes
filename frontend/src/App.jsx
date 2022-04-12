import React, { Suspense } from "react";
import Home from "@pages/Home";

import "./App.css";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Home />
      </div>
    </Suspense>
  );
}

export default App;
