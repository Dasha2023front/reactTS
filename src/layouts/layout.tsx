import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
// import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themes } from "../styles/Themes";

export const Layout = () => {
  return (
    <>
      <ThemeProvider theme={themes['light']}>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};
