import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import ProductContainer from './components/ProductContainer';
import Header from './components/Header';
import { Menu } from './components/Menu';
const Layout = ()=>{
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([{
  path:'/',
  element:<Menu/>,
    

},{
  
    path:'page',
    element:<Layout/>,
    children:[
      {
    
      path:'product',
      element:<ProductContainer/>
    },
      {
      path:"form",
      element:<Form/>
    }
    ]
  
  },

])


function App() {
  return (
      <RouterProvider router={router}/>
     );
}

export default App;
