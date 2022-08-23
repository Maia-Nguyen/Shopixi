import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/about' element={ <About />}/>
          <Route path='/sign-in' element={ <SignIn />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// const user = {
//   firstName: 'Maia',
//   lastName: 'Nguyen'
// };

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const element = (<h1>Hello, { formatName(user) }!</h1>)