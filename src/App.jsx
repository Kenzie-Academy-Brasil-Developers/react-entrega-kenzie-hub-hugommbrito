import { RoutesStructure } from "./routes/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyles } from "./styles/globalStyles";
import { UserContextProvider } from "./contexts/userContext/index.jsx";
import { TechContextProvider } from "./contexts/TechContext/index.jsx";

function App() {
  return (
    <>
      <GlobalStyles />

      <UserContextProvider>
        <TechContextProvider>
          <RoutesStructure />
        </TechContextProvider>
      </UserContextProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
}

export default App;
