import "./Global.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "../pages/About/About";
import Apartments from "../pages/Apartments/Apartments";
import Doors from "../pages/Doors/Doors";
import Loggias from "../pages/Loggias/Loggias";
import Main from "../pages/Main/Main";
import Page404 from "../pages/Page404/Page404";
import Window from "../pages/Window/Window";
import { apartImg } from "../data/data";

function App() {
  const [images, setImages] = useState(apartImg);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (1 + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // console.log(apartImg);
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route
        path="/apartments"
        element={
          <Apartments
            images={images}
            setImages={setImages}
            shuffleArray={shuffleArray}
          />
        }
      />
      <Route path="/doors" element={<Doors />} />
      <Route path="/loggias" element={<Loggias />} />
      <Route path="/window" element={<Window />} />
      <Route index element={<Main />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
export default App;
