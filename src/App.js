import './App.css';
import {darkTheme} from './theme/themes';
import {ThemeProvider} from "styled-components";

import PolyLine from "./components/drawElements/polyLine";
import Line from "./components/drawElements/line";

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
    return (
        <Provider store={store}>
          <ThemeProvider theme={darkTheme}>
              WSCad, draw line or polyline
              <PolyLine/>
          </ThemeProvider>
        </Provider>
    );
}

export default App;
