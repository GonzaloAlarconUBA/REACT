import MiPrimerComponente from './components/miPrimerComponente/MiPrimerComponente'
import { Estado } from './components/estado/Estado';
const MyFunction = () => {
  return <>River </>;
};

//props

function App() {
  return (
    <>
      <Estado/>
      <MyFunction/>
      <MiPrimerComponente año={1901} fecha={"25/5"}/>
    </>
  );
}

export default App
