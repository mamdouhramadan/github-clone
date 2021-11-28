import AppTitle from "../Components/AppTitle";
import AppPanel from "../Components/AppPanel";
import { Routes, Route, useLocation } from "react-router-dom";
import { SampleData } from "../Util/Data";
import { getSubtitle } from "../Util/Functions";


function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
    
      {/* Start Home Header */}

      <AppTitle
        title="Trending"
        subtitle={getSubtitle(pathname)}
      />
      {/* End Home Header */}
      <main>
        <div className="container">
          <AppPanel currentPath={pathname}>
            {/* <HomeScreen /> */}
            <Routes>
              {
                SampleData.pages.map((item, index) =>
                  <Route key={index} exact path={item.path} element={item.component} />
                )
              }
            </Routes>
          </AppPanel>
        </div>
      </main>

    </div>
  );
}

export default App;
