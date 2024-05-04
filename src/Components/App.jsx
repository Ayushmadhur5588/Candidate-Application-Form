import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Body from "./Body";
const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Body />
      </div>
    </Provider>
  );
};

export default App;
