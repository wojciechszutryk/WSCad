import './App.css';
import DarkThemeProvider from "./components/wrappers/darkThemeProvider";
import {Provider} from 'react-redux'
import store from './data/store'
import {Wrapper} from "./components/styleComponents/Layout";
import Navigation from "./components/Elements/Navigation";
import Logo from "./components/Elements/Logo";
import Workspace from "./components/Elements/Workspace";


const App = () => {
    return (
        <Provider store={store()}>
          <DarkThemeProvider>
              <Wrapper>
                  <Logo/>
                  <Workspace/>
                  <Navigation/>
              </Wrapper>
          </DarkThemeProvider>
        </Provider>
    );
}

export default App;
