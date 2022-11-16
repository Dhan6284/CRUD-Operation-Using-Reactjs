import './App.css'
import Home from "./Component/Home";
import Add from "./Component/Add";
import Edit from "./Component/Edit";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/create" element = {<Add />} />
        <Route path="/edit" element = {<Edit />} />
      </Routes>
    </Router>
    </>
  )
}
export default App;

