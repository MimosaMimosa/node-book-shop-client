import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
   const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Home/>}></Route>
        )
    )
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
