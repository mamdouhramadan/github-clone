import DeveloperScreen from "./DeveloperScreen";
import AppTitle from "../Components/AppTitle";
import AppPanel from "../Components/AppPanel";
import { Routes, Route } from "react-router-dom";
import HomeScreen from './HomeScreen/index';

function App() {
  return (
    <div className="App">
      
      {/* Start Home Header */}
      <AppTitle
        title="Trending"
        subtitle="see what the Github community is most excitd about today"
      />
      {/* End Home Header */}
      <main>
        <div className="container">
          <AppPanel>
            {/* <HomeScreen /> */}
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route exact path="/developers" element={<DeveloperScreen />} />
            </Routes>
          </AppPanel>
        </div>
      </main>

    </div>
  );
}

export default App;
