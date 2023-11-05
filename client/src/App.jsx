import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home/Home";
import PublicLayout from "./components/Layout/PublicLayout";
import { CountProvider } from "./components/Context/ContextProvider/ContextProvider";

function App() {
  return (
    <CountProvider>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </CountProvider>
  );
}

export default App;

