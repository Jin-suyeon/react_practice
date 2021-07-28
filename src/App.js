import AnimationScale from "./animation/AnimationScale";
import "./App.css";
import MapManyButtonClick from "./practice_map_button/MapManyButtonClick";
import MapManyButtonClickTwo from "./practice_map_button/MapManyButtonClickTwo";
import MapOneButton from "./practice_map_button/MapOneButton";
import MapHover from "./practice_map_hover/MapHover";

function App() {
  return (
    <div className="App">
      <MapManyButtonClick />
      <MapManyButtonClickTwo />
      <MapOneButton />

      <MapHover />

      <AnimationScale />
    </div>
  );
}

export default App;
