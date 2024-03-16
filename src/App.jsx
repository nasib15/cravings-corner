import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <div className="container mx-auto max-w-7xl w-[83%]">
      <header>
        <nav className="mb-14">
          <Navbar></Navbar>
        </nav>
        <Banner></Banner>
      </header>
      <Recipes></Recipes>
    </div>
  );
}

export default App;
