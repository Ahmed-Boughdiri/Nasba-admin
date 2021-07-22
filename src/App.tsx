import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";
import { 
  Products,
  AddProduct,
  CompletedDeliveries,
  Deliveries,
  Product
} from "screens";

const App = () =>(
  <Router>
    <Switch>
      <Route exact path="/products" component={Products} />
      <Route exact path="/deliveries" component={Deliveries} />
      <Route exact path="/add/product" component={AddProduct} />
      <Route exact path="/completed/deliveries" component={CompletedDeliveries} />
      <Route exact path="/product" component={Product} />
    </Switch>
  </Router>
)

export default App;
