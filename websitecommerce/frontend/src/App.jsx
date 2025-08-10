import Home from './pages/Home';
import Cart from './pages/mycart';
import WebDetail from './pages/webdetail';
import WebListView from './pages/WebListView';

function App() {
  return (
    <div>
      <Cart />
      {/* To show another page, just comment/uncomment like below */}
      {/* <WebListView /> */}
    </div>
  );
}

export default App;
