import './styles/App.css';
import NavBar from './components/navbar';
import ContainerNotes from './components/containerNotes';
import CreateNote from './components/createNote';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <ContainerNotes />
      <CreateNote />
    </div>
  );
}

export default App;
