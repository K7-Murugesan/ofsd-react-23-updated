import "./App.css";
import Header from "./components/Home";
import NavBar1 from "./components/NavBar1";
import NotFound from "./components/NotFound";
import Products1 from "./components/Products1";
import CreateProduct from "./components/CreateProduct";
import {
  BrowserRouter as Router,
  Routes as ManageRoute,
  Route,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import UpdateProduct from "./components/UpdateProduct";
import { Provider } from "react-redux";
import store from "./store/store";
import WishList from "./components/WishList";

function App() {
  return (
    <Provider store={ store } >
      <Router>
        <ManageRoute>
          <Route exact path="/" element={<NavBar1 />}>
            <Route  index element={<Header />} />
            <Route  path="/sign-up" element={ <SignUp/> } />
            <Route path="/products" element={<Products1 />} />
            <Route  path="/create-product" element = { <CreateProduct/> } />
            <Route path="/update/:id" element={ <UpdateProduct/> }/>
            <Route path="/wishlist" element={ <WishList/> } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </ManageRoute>
      </Router>
    </Provider>
  );
}

export default App;
