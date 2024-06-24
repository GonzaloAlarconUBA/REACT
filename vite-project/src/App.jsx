import MiPrimerComponente from './components/miPrimerComponente/MiPrimerComponente'
import { Estado } from './components/estado/Estado';
import GetPosts from './components/GetPost/GetPosts';
import RickAndMorty from './components/rickandmorty/RickAndMorty';

const MyFunction = () => {
  return <>River </>;
};

//props

function App() {
  return (
    <>
      <Estado />
      <MyFunction />
      <MiPrimerComponente año={1901} fecha={"25/5"} />
      <GetPosts />
      <RickAndMorty />
    </>
  );
}

export default App
