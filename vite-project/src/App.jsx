import MiPrimerComponente from './components/miPrimerComponente/MiPrimerComponente'

const MyFunction = () => {
  return <>River </>;
};

//props

function App() {
  return (
    <>
      <MyFunction/>
      <MiPrimerComponente año={1901} fecha={"25/5"}/>
    </>
  );
}

export default App
