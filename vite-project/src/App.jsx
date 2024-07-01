import MiPrimerComponente from "./components/miPrimerComponente/MiPrimerComponente";
import { Estado } from "./components/estado/Estado";
import GetPosts from "./components/GetPost/GetPosts";
import RickAndMorty from "./components/rickandmorty/RickAndMorty";
import ConversorMonedas from "./components/conversor/conversor";

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
      <ConversorMonedas />
    </>
  );
}

export default App;
