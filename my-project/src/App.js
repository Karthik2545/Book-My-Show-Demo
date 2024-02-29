import './App.css';
import Home from './Maincomponents/Home';
import Movie from './Maincomponents/Movie';
import Play from './Maincomponents/Play';
//import Hero from './Sliders/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/plays/:id" element={<Play/>} />
      </Routes>
    </div>
  );
}

export default App;