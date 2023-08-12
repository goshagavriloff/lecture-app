import React from "react";
import {Home} from "./container";
import {Navbar} from "./components";

function App() {
  return (
    <div className='container m-auto'>
    <Navbar/>
    <Home />
  </div>
  );
}
export default App;