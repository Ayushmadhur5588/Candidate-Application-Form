import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import JobList from "./JobList";
const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <JobList />
      </div>
    </Provider>
  );
};

export default App;
