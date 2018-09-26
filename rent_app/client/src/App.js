import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios'


// Import Pages
// import Home from "./pages/Home";
// import Landlord from "./pages/Landlord";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import UnitPage from "./pages/Test";


// Import Components
import Nav from "./components/Nav";
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Home from './components/Home';

// Global CSS (unedited form Create-React-App command!)
import './App.css';

class App extends Component {
  
 state = {
   loggedIn: false,
   user: null
 }

 componentDidMount() {
   axios.get('/api/auth/user').then(response => {
     console.log(response.data)
     if (!!response.data.user) {
       console.log('THERE IS A USER')
       this.setState({
         loggedIn: true,
         user: response.data.user
       })
     } else {
       this.setState({
         loggedIn: false,
         user: null
       })
     }
   })
 }
 
  _logout = (event) => {
   event.preventDefault()
   console.log('logging out')
   axios.post('/api/auth/logout').then(response => {
     console.log(response.data)
     if (response.status === 200) {
       this.setState({
         loggedIn: false,
         user: null
       })
     }
   })
 }

 _login = (username, password) => {
   axios
     .post('/api/auth/login', {
       username,
       password
     })
     .then(response => {
       console.log(response)
       if (response.status === 200) {
         // update the state
         this.setState({
           loggedIn: true,
           user: response.data.user
         })
       }
     })
 }
 render() {
   return( 
    <Router>
      <div className="App">
       
        <Nav _logout={this._logout} loggedIn={this.state.loggedIn}/>
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/" render={() =>       <Home user={this.state.user} />
          }/>
          {/* <Route exact path="/Landlord" component={Landlord} /> */}
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/test" component={UnitPage} />
          <Route exact path="/login" render={() => <LoginForm
                _login={this._login}
                _googleSignin={this._googleSignin}
              />
          }
          />
          <Route exact path="/signup" component={SignupForm} />           <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  ); 
 }
}

// export default App;

  
//   const App = () => {
//   }
  
//   class App extends Component {

//     componentDidMount() {
//       axios.get('/auth/user').then(response => {
//         console.log(response.data)
//         if (!!response.data.user) {
//           console.log('THERE IS A USER')
//           this.setState({
//             loggedIn: true,
//             user: response.data.user
//           })
//         } else {
//           this.setState({
//             loggedIn: false,
//             user: null
//           })
//         }
//       })
//     }
  
//     _logout(event) {
//       event.preventDefault()
//       console.log('logging out')
//       axios.post('/auth/logout').then(response => {
//         console.log(response.data)
//         if (response.status === 200) {
//           this.setState({
//             loggedIn: false,
//             user: null
//           })
//         }
//       })
//     }
  
//     _login(username, password) {
//       axios
//         .post('/auth/login', {
//           username,
//           password
//         })
//         .then(response => {
//           console.log(response)
//           if (response.status === 200) {
//             // update the state
//             this.setState({
//               loggedIn: true,
//               user: response.data.user
//             })
//           }
//         })
//     }
  
//     render() {
//       return (
//         <div className="App">
//           <h1>This is the main App component</h1>
//           <Header user={this.state.user} />
//           {/* LINKS to our different 'pages' */}
//           <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
//           {/*  ROUTES */}
//           {/* <Route exact path="/" component={Home} /> */}
//           <Route exact path="/" render={() => <Home user={this.state.user} />} />
//           <Route
//             exact
//             path="/login"
//             render={() =>
//               <LoginForm
//                 _login={this._login}
//                 _googleSignin={this._googleSignin}
//               />}
//           />
//           <Route exact path="/signup" component={SignupForm} />
//           {/* <LoginForm _login={this._login} /> */}
//         </div>
//       )
//     }
//   }
  
export default App;
