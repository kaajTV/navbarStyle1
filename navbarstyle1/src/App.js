import './App.css';
import { Navbar, Sidebar } from './components';
import { Header, Features, Prices, Contact, Footer } from './containers';

function App() {
  return (
    <div className="App main">
      <div className="gradient__bg">
        <Navbar />
        {/* <Sidebar /> */}
        <Header />
      </div>
      <Features />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
