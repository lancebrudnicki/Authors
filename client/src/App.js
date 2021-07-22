
import './App.css';
import Home from "./view/home"
import {Router} from "@reach/router"
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (

    <div className="App">
      <Router>
        <Home path="/"/>
        <CreateAuthor path="/newauthor"/>
        <EditAuthor path="/editauthor/:author_id"/>
      </Router>
    </div>
  );
}

export default App;
