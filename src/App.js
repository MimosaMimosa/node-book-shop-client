
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
   const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="login" element={<Login/>}></Route>
              <Route path="about" element={<Aboutgi/>}></Route>
            </Route>
        )
    )
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
