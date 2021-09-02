import { Header } from "./components/Header";
import { BillAmount } from "./components/BillAmount";
import { Results } from "./components/Results";

import { GlobalProvider } from './context/GlobalState'



function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="largeCard">
        <div className="leftCard">

          <BillAmount />

        </div>

        <div className="rightCard">

          <Results />

        </div>
      </div>
    </GlobalProvider>
  );

}

export default App;
