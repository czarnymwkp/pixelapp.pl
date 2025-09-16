import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Contact } from "./pages/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Offert } from "./pages/Offert/Offert";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme/theme";
import { OffertLayout } from "./pages/Offert/OffertLayout";
import { OffertWebsite } from "./pages/Offert/OffertWebsite";
import { OffertWebApp } from "./pages/Offert/OffertWebApp";
import { HomePage } from "./pages/Home/Home";
import { PortfolioProject } from "./pages/Portfolio/PortfolioProject";
import { RegisteryForm } from "./pages/Register/RegisterPage";
import { LoginForm } from "./components/Forms/LoginForm/LoginForm";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/portfolio" element={<Portfolio></Portfolio>} />
          <Route path="/portfolio/:projectId" element={<PortfolioProject />} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/register" element={<RegisteryForm></RegisteryForm>} />
          <Route path="/login" element={<LoginForm></LoginForm>} />

          <Route path="/offert" element={<OffertLayout></OffertLayout>}>
            <Route index element={<Offert />}></Route>
            <Route
              path="websites"
              element={<OffertWebsite></OffertWebsite>}
            ></Route>
            <Route
              path="webapp"
              element={<OffertWebApp></OffertWebApp>}
            ></Route>
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
