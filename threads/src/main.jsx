import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import {
  extendTheme,
  ChakraProvider,
  ColorModeScript,
  useColorMode,
} from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    gray: {
      light: "#616161",
      dark: "#9e9e9e",
    },
  },
});

const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
