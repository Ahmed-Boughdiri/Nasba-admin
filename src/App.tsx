import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  HashRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";
import { 
  Products,
  AddProduct,
  CompletedDeliveries,
  Deliveries,
  Product,
  Delivery,
  Login,
  Signup,
  Home
} from "screens";

const App = () =>(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/deliveries" component={Deliveries} />
      <Route exact path="/add/product" component={AddProduct} />
      <Route exact path="/completed/deliveries" component={CompletedDeliveries} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/delivery" component={Delivery} />
    </Switch>
  </Router>
)

export default App;
