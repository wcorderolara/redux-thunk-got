import logo from './logo.svg';
import './App.css';
import GotList from './features/GotList/GotList';

function App() {
  return (
    <div className="container mx-auto mt-5 bg-gray-100 p-2">
      <div className="flex flex-row">
        <section className="w-full">
          <GotList />
        </section>
      </div>
    </div>
  );
}

export default App;
