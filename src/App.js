
import AnimationScale from './animation/AnimationScale';
import './App.css';
import MapManyButtonClick from './practice_map_button/MapManyButtonClick';
import MapManyButtonClickTwo from './practice_map_button/MapManyButtonClickTwo';
import MapHover from './practice_map_hover/MapHover';

function App() {
  return (
    <div className="App">
      <MapManyButtonClick />
      <MapManyButtonClickTwo />

      <MapHover />

      <AnimationScale />
    </div>
  );
}

export default App;
