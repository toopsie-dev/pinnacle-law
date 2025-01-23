import About from "./components/about";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Features from "./components/features";
import Services from "./components/services";
import Testimonials from "./components/testimonial";
import { useThemeContext } from "./contexts/theme";

function App() {
  const { theme, switchTheme } = useThemeContext();

  return (
    <div className="app" data-theme={theme}>
      <button onClick={() => switchTheme(theme === "dark" ? false : true)}>
        Switch Theme
      </button>
      <Banner />
      <Features />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
