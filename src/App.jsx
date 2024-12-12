import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./providers/ThemeProvider";

import { ScrollProvider } from "./providers/ScrollProvider.jsx";
import "./App.css";

import "swiper/swiper-bundle.css";

import { AppRoutes } from "./routes/AppRoutes";
import MainLayout from "./layouts/MainLayout.jsx";
import { Header } from "./layouts/Header/Header.jsx";
import { Footer } from "./layouts/Footer/Footer.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollProvider>
        <BrowserRouter>
          <MainLayout>
            <Header />
            <AppRoutes />
            <Footer />
          </MainLayout>
        </BrowserRouter>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
