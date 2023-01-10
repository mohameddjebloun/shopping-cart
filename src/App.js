import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar bg-base-100 flex justify-center top-0 z-50 h-fit w-full sticky">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/shop">
          Shop
        </Link>
      </nav>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
