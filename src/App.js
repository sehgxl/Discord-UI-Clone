import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import DiscordDashBoard from "./components/Discord/DiscordDashboard/discordDashBoard";
import DiscordServer from "./components/Discord/DiscordServer/discordServer";
function App() {
  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route
            path="/DiscordDashBoard"
            element={<DiscordDashBoard />}
          ></Route>
          <Route path="/DiscordServer" element={<DiscordServer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
