import "./App.css";
import "./components/styles/custom_specialty/fancyBorderWall.css";
import Counter from "./components/counter.jsx"; // contains btn for increase and decrease
import InputComponent from "./components/InputComponent.jsx";
function App() {
  return (
    <>
      <Counter />
      <div style={{"padding-bottom": "3.2rem"}}></div>
      <div class="fancyBorderWall"></div>
      <InputComponent />
    </>
  );
}

export default App;
