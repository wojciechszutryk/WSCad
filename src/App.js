import './App.css';
import DarkThemeProvider from "./components/wrappers/darkThemeProvider";

import PolyLine from "./components/drawElements/polyLine";
import Line from "./components/drawElements/line";

import {Provider} from 'react-redux'
import store from './data/store'
import {Wrapper} from "./components/styleComponents/Layout";
import Navigation from "./components/Elements/Navigation";


const App = () => {
    return (
        <Provider store={store()}>
          <DarkThemeProvider>
              <Wrapper>
                  <Navigation/>
              </Wrapper>
          </DarkThemeProvider>
        </Provider>
    );
}

export default App;
