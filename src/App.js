
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Appointment from './Pages/Apponitment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/appointment',
          element:<Appointment></Appointment>,
        },
        {
          path:'/login',
          element:<Login></Login>
        },
      ]
    }

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
