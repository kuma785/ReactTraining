import './App.css';
import Chapter0 from './Pages/Chapter0';
import {Route, Routes} from "react-router-dom";
// import Chapter2 from "./components/Chapter2-file/Chapter2";
// import Chapter1 from "./components/Chapter1-file/Chapter1";

// import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
        <Route path='chapter0' element={<Chapter0 />}/>
        {/* <Route path='chapter1' element={<Chapter1 />}/> */}
        {/* <Route path='chapter2' element={<Chapter2 />}/> */}
      </Routes>
    </>
  );
}

export default App;
