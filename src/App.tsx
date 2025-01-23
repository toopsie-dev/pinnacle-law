import About from "./components/about";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Copyright from "./components/copyright";
import Features from "./components/features";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/scroll-top-button";
import Services from "./components/services";
import Testimonials from "./components/testimonial";
import { NavContextProvider } from "./contexts/navigation";
import { useThemeContext } from "./contexts/theme";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className="app" data-theme={theme}>
      {/* <button
        className="btn"
        onClick={() => switchTheme(theme === "dark" ? false : true)}
      >
        Switch Theme
      </button> */}
      <NavContextProvider>
        <Navbar />
      </NavContextProvider>

      <Banner />
      <Features />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <Copyright />
      <ScrollToTop />
    </div>
  );
}

export default App;
