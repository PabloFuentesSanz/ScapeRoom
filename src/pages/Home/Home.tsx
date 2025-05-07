import { useEffect, useState } from "react";
import TypewriterText from "../../system-ui/TypewriterText/TypewriterText";
import "./Home.css";
import SignInPage from "./SignIn/SignInPage";

const Home = () => {
  const [poweredOn, setPoweredOn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setPoweredOn(true), 1800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`home__container ${poweredOn ? "booted" : ""}`}>
      {!poweredOn && <div className="crt__bootup" />}
      {poweredOn && (
        <>
          <TypewriterText text="Sistema Clerk™" />
          <button className="home__signin-button" onClick={() => setShowLogin(true)}>
            Iniciar Evaluacion
          </button>
        </>
      )}
      <SignInPage show={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
};

export default Home;
