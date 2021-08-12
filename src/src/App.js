import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';


const App = () => {
  const Name = () => {
    return <h1>Hello this is Name Page</h1>
  }
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/contact/name' component={Name} />
        <Route component={Error} />
      </Switch>

      {/* <About />
      <Contact /> */}
    </>
  )
}


export default App;