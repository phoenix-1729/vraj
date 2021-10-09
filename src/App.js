import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Posts from './components/Posts';
import Login from './components/loginPage/Login';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Post and Trending Widgets */}
    <Posts/>
    {/* <Login/> */}
    </div>
  );
}

export default App;
