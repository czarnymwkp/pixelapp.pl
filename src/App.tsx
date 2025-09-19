import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Contact } from "./pages/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Offert } from "./pages/Offert/Offert";
import { ThemeProvider } from "styled-components";
import { MainTheme, theme } from "./styles/Theme/theme";
import { OffertLayout } from "./pages/Offert/OffertLayout";
import { OffertWebsite } from "./pages/Offert/OffertWebsite";
import { OffertWebApp } from "./pages/Offert/OffertWebApp";
import { HomePage } from "./pages/Home/Home";
import { PortfolioProject } from "./pages/Portfolio/PortfolioProject";

import { OffertGraphic } from "./pages/Offert/OffertGrapic";
import { LoginPage } from "./pages/Login/LoginPage";
import { RegisteryPage } from "./pages/Register/RegisterPage";
import { Test } from "./pages/Testy/Test";
import { Service } from "./pages/Services/Service";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <MainTheme>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/portfolio" element={<Portfolio></Portfolio>} />
            <Route
              path="/portfolio/:projectId"
              element={<PortfolioProject />}
            />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/register" element={<RegisteryPage></RegisteryPage>} />
            <Route path="/login" element={<LoginPage></LoginPage>} />
            <Route path="/test" element={<Test></Test>} />

            <Route path="/offert" element={<OffertLayout />}>
              <Route index element={<Offert />}></Route>
              <Route path="websites" element={<OffertWebsite />}></Route>
              <Route path="webapp" element={<OffertWebApp />}></Route>
              <Route path="graphic" element={<OffertGraphic />}></Route>
              <Route path="services" element={<Service />} />
            </Route>
          </Routes>
        </MainTheme>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
