import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Twitter from "./Twitter";
import Hobby from "./Hobby";

const App = () => {
  return (
    <div className='App'>
      <h1>Welcome to Home Page</h1>
      <BrowserRouter>
        <div className='links'>
          <button className='btn1'>
            <Link to='/hobby'>Hobbies App</Link>
          </button>
        </div>

        <Routes>
          <Route path='hobby' element={<Hobby />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
{
  /*
   <button className='btn1'>
            <Link to='/prod'>Products Application</Link>
          </button>

          <br />

          <button className='btn1'>
            <Link to='/forums'>Forums Application</Link>
          </button>

          <br />
          <Route path='/prod' element={<ProductApp />} />
          <Route path='/forums' element={<Forums />} />
  <Link to='/todos'>TodoApp</Link>
        <br /><Routes>
          <Route path='/todos' element={<TodoApp />} />
</Routes>*/
}
