import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Testtimonial from './Component/Testimonial';
import Advancedfeatures from './Component/Advancedfeatures';
import Quetions from './Component/Quetions';
import Blogsection from './Component/Blogsection';
import Subscriptionpage from './Component/Subscriptionpage';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
        <Home/>
        <Testtimonial/>
        <Advancedfeatures/>
        <Quetions/>
        <Blogsection/>
        <Subscriptionpage/>
        <Footer/>
    </div> 
  );
}

export default App;
