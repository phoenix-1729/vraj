import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Posts from './components/Posts';
function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Post and Trending Widgets */}
    <Posts/>
    </div>
  );
}

export default App;
