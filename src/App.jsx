import { Redirect, Route } from "react-router";
import Delivery from "./components/Delivery";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
import Photos from "./pages/Photos";
import OrderOnline from "./pages/OrderOnline";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Delivery} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Reviews}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Photos}
      />
      <CheckoutLayoutHOC path="/checkout/orders" exact component={Checkout} />
    </div>
  );
}

export default App;
