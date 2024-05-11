import "./App.css";
import { Nav } from "./components/Nav";
import { Banner } from "./components/banner";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Banner/>
      <Nav />
      <AppRoutes />
    </div>
  );
}

export default App;
