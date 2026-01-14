
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Book from './components/ui/Book';
import Discounted from './components/ui/Discounted';



function App() {
  return (
    <div className="App">
      <Nav />        
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />

    </div>
  );
}

export default App;
