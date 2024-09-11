import Home from "../Home/Home"
import Prediction from "../Prediction/Prediction"
import Archive from "../Archive/Archive"
import MasterLayout from "../MasterLayout/MasterLayout"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NotFound from "../NotFound/NotFound"


function App() {

 const routes= createBrowserRouter([
    {path:'/', element:<MasterLayout/>, errorElement: <NotFound/>, children: [
      {index: true , element:<Home/>},
      {path:'prediction', element:<Prediction/>},
      {path:'archive', element:<Archive/>},
    ]},
  
  ]);

  return (
    
   <>
      <RouterProvider router={routes}/>
   </>

  );
}

export default App;
