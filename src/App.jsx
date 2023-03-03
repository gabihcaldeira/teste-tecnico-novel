import MainProvider from "./context/mainContext";
import MainRoutes from "./routes";

function App() {
  return (
    <>
      <MainProvider>
        <MainRoutes />
      </MainProvider>
    </>
  );
}

export default App;
