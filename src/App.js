import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'; 
import About from './home/components/About';
import SignIn from './home/components/Signin';
import SignUp from './home/components/Signup';
import Home from './home/Home';
import PageHome from './home/components/PageHome';


function App() {
  return (
<BrowserRouter>

      <Routes>

        <Route path='/pp' element={<Home />}>

          <Route path='home' element={< PageHome/>} />

          <Route path='about' element={<About />} />

          <Route path='signin' element={<SignIn />} />

          <Route path='signup' element={<SignUp />} />

        </Route>

      
        

        <Route path='*' element={<Navigate to='/pp/home' />} />
      </Routes>
    </BrowserRouter>
    



  );
}

export default App;

