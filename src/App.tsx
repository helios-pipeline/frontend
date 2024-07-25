import './App.css'
import SourcesHomePage from './components/createDataSource/SourcesHomePage';
import SideNav from './components/SideNav'
import SQLConsole from './components/SQLConsole'
import CreateNewSource from './components/createDataSource/CreateNewSource';
import QuarantineTablePage from './components/QuarantineTablePage';

import {
  Switch,
  Route
} from "react-router-dom";
import { IntegrationProvider } from './contexts/IntegrationContext';


function App() {

  return (
    <>
      <IntegrationProvider>
        <div className="w-screen"> 
          <SideNav />
          
          {/* Main container div*/}
          <div className="lg:pl-72 py-10" >
              <div className="px-4 sm:px-6 lg:px-8">
                <Switch>
                  <Route path="/sql-dashboard">
                    <SQLConsole />
                  </Route>
                  <Route path="/datasource-dashboard">
                    <SourcesHomePage />
                  </Route>
                  <Route path="/create-source">
                    <CreateNewSource />
                  </Route>
                  <Route path="/quarantine-table">
                    <QuarantineTablePage />
                  </Route>
                  {/* <Route path="/input-source-details">
                    <InputSourceDetails />
                  </Route>
                  <Route path="/input-source-details">
                    <InputSourceDetails />
                  </Route> */}
                </Switch>
              </div>
          </div>
        </div>
      </IntegrationProvider>
    </>
  )
}

export default App
