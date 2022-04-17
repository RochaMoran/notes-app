import NavBar from '../components/navbar';
import ContainerNotes from '../components/containerNotes';
import CreateNote from '../components/createNote';

function Home() {
  return (
    <div className='app'>
      <NavBar />
      <ContainerNotes />
      <CreateNote />
    </div>
  );
}

export default Home;
