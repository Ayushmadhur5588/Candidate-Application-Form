import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Body from "./Body";
import Bodyy from "./Body_";
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
