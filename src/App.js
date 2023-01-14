// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './index.css';
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import NewsScreen from "./components/pages/home/NewsPage";

function App() {
  return (
    <div className="App">
     <BrowserRouter basename="/">
        <Header/>
        
          <Routes> 
             {/* <Route exact path="/" component={NewsScreen} /> */}
             <Route  path="/" element={<NewsScreen/>}  exact />
          </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

// export default App;

// class App extends Component {
//   render() {
//     return (
//       <>
//       <BrowserRouter basename="/">
//         <Header/>
        
//           <Routes> 
//              <Route exact path="/" component={NewsScreen} />
//           </Routes>
//         <Footer/>
//         </BrowserRouter>
//       </>
//     );
//   }
// }

export default App;