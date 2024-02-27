import { ThemeProvider } from "@emotion/react";
import { ConnectedRouter } from "connected-react-router";
import { BrowserHistory } from "history";
import { Provider } from "react-redux";
import { Store } from "redux";
import LayoutContainer from "./containers/LayoutContainer";
import Routes from "./routes";
import { ApplicationState } from "./store";
import * as themes from "./styles/theme";

interface MainProps {
  store: Store<ApplicationState>
  history: BrowserHistory
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <LayoutContainer>
          {({ theme }) => (
            <ThemeProvider theme={themes[theme]}>
              <Routes />
            </ThemeProvider>
          )}
        </LayoutContainer>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
