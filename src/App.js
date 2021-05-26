import './App.css';
import {darkTheme} from './theme/themes';
import {ThemeProvider} from "styled-components";
import {useMousePosition} from "./hooks/useMousePosition";
import Line from "./components/drawElements/line";
import PolyLine from "./components/drawElements/polyLine";

const App = () => {
    return (
      <ThemeProvider theme={darkTheme}>
          <PolyLine/>
          {/*<Line/>*/}
      </ThemeProvider>
    );
}

export default App;
