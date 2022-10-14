import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About";
import Login from "./Components/Pages/auth/Login";
import Home from "./Components/Pages/Home";
import Layout from "./Components/Pages/Layout";
// import Profile from './Components/Pages/auth/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="home" element={<Home />} />
            {/* <Route path="profile" element={<Profile />}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
