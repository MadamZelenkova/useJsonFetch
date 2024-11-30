import "./App.css";

import DataComponent from "./Components/DataComponent";
import LoadingComponent from "./Components/LoadingComponent";
import ErrorComponent from "./Components/ErrorComponent";

function App() {
  return (
    <>
      <DataComponent />
      <LoadingComponent />
      <ErrorComponent />
    </>
  );
}

export default App;
