import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container mx-auto max-w-7xl w-[83%]">
      <header>
        <nav className="mb-14">
          <Navbar></Navbar>
        </nav>
        <Banner></Banner>
      </header>
    </div>
  );
}

export default App;
