import "./App.css";
import Header from "./components/Home";
import NavBar1 from "./components/NavBar1";
import NotFound from "./components/NotFound";
import Products1 from "./components/Products1";

import {
  BrowserRouter as Router,
  Routes as ManageRoute,
  Route,
} from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
      <Router>
        <ManageRoute>
          <Route exact path="/" element={<NavBar1 />}>
            <Route  index element={<Header />} />
            <Route  path="/sign-up" element={ <SignUp/> } />
            <Route path="/products" element={<Products1 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </ManageRoute>
      </Router>
  );
}

export default App;
