import { MainPage } from "./pages/mainPage/MainPage";
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from "../src/constants/theme"

function App() {
  return (
    <ChakraProvider theme={theme} >
      <MainPage/>
    </ChakraProvider>
  );
}

export default App;
