
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Book from './components/ui/Book';
import Discounted from './components/ui/Discounted';
import Explore from './components/ui/Expolore';
import Footer from './components/ui/Footer';



function App() {
  return (
    <div className="App">
      <Nav />        
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
