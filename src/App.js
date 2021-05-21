import './App.css';
import {darkTheme} from './theme/themes';
import {ThemeProvider} from "styled-components";
import {useMousePosition} from "./hooks/useMousePosition";
import Line from "./components/drawElements/line";

const App = () => {
    return (
      <ThemeProvider theme={darkTheme}>
          <Line/>
      </ThemeProvider>
    );
}

export default App;
