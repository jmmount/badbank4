import React from 'react';
import { NavBar } from 'NavBar';
import { UserContext } from 'Card'
import { Home } from 'Home'
import { CreateAccount } from 'CreateAccount'
import { Login } from 'Login'
import { Deposit } from 'Deposit'
import { Withdraw } from 'Withdraw'
import { Balance } from 'Balance'
import { Route, HashRouter } from 'react-router-dom';



function App() {
  const gradientStyles = {
    background: `linear-gradient(to bottom, #333, #4069e1), linear-gradient(to right, #333, #4069e1), radial-gradient(#333, #4069e1)`,
  };
  return (
    <HashRouter>
      <div style={gradientStyles}>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'',email:'',password:'secret',balance:0}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
           {/* <Route path="/alldata/" component={AllData} />*/}
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
