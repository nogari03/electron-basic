import { Provider } from "react-redux";
import { Store } from "redux";


interface MainProps {
  store: Store<ApplicationState>
  history: History
}

function App() {
  return (
    <Provider store={store}>
    </Provider>
  );
}

export default App;
