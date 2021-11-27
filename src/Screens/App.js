import DeveloperScreen from "./DeveloperScreen";
import AppTitle from "../Components/AppTitle";
import AppPanel from "../Components/AppPanel";

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
            <DeveloperScreen />
          </AppPanel>
        </div>
      </main>

    </div>
  );
}

export default App;
