import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar";
import Layout from "./components/layout";
import "./App.css";
import Content from "./components/content";
import Profil from "./components/profil";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="bg-[#1E1E1E] rounded-b-4xl">
          <Layout />
          <Content />
        </div>
        <Profil />
      </div>
    </>
  );
}

export default App;
