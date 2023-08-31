import data from "./scp.json";
import SCP from './SCP';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from "./Home";
import background from './background.jpg'
import Footer from "./Footer";

function App() {
  return (
    <div class="card text-center" style={{ backgroundImage: `url(${background})`,backgroundSize:'contain', backgroundRepeat:'repeat',height:'auto' }}>
  <div class="card-header">
    <Router>
      <Nav data={data}/>      
      <Routes>
      <Route exact path="/" element={<Home/>} />
        {
          data.map(
            scp=>(
              <Route 
              key={scp.item}
              path={`${scp.item}`}
              element={<SCP scp={scp}/>}
              />
            )
          )
        }
      </Routes>
    </Router>
    {/* <Home/> */}
    <Footer/>
    </div>
    </div>
  );
}

export default App;
