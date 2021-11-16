import { useSelector } from "react-redux"
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom"
import { App } from "../App"
import About from "../Components/About/About"
import Achieve from "../Components/Achievements/achieve"
import Buy from "../Components/BuyTrash/buy"
import Profile from "../Components/Dashboard/Account/Account"
import Dashboard from "../Components/Dashboard/dashboard"
import Sales from "../Components/Dashboard/Sales/sales"
import { Footer } from "../Components/Footer/Footer"
import History from "../Components/History/history"
import Login from "../Components/Login/LoginForm"
import Navigation from "../Components/Navbar/Nabar"
import Register from "../Components/Register/register"
import { RootState } from "../redux/store/store"

const Routes = () => {
    const isLoggedin = useSelector((state: RootState) => state.user.isLoggedin)
    
    return (
        <Router>
            <div>
                
                <Navigation/>
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/register" component={Register} />
                <Route exact={true} path="/" component={App} />
                <Route exact={true} path="/buy" component={Buy} />
                <Route exact={true} path="/dashboard">
                    {isLoggedin ? <Dashboard/>:<Redirect to='/login' />}
                    </Route>
                <Route exact={true} path="/about" component={About} />
                <Route exact={true} path="/sales" component={Sales} />
                <Route exact={true} path="/achievements" component={Achieve} />
                <Route exact={true} path="/history" component={History} />
                <Route exact={true} path="/profile" component={Profile} />
                <div className="b-example-divider my-4"></div>
                <Footer />
            </div>
        </Router>
    )
}

export default Routes
