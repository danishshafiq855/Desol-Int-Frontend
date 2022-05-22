import React from "react";
import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoutes";

// components
const Login = React.lazy(() => import("./components/Login"));
const AddVehicle = React.lazy(() => import("./components/AddVehicle"));

function App() {
	return (
    <Router>
		<Switch>
			{/* <Route exact path="/" component={Login}> */}
				{/* <PrivateRoute exact path="/add-vehicle" component={AddVehicle} /> */}
			{/* </Route> */}
			<Route exact path="/" component={AddVehicle}/>
		</Switch>
    </Router>
	);
}

export default App;
