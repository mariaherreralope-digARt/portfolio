// import { useState } from "react";
// import AppEn from "./AppEn";
// import AppEs from "./AppEs";

import React, { useState } from "react";
import Navbar from "./components/Navbar";

import AppEn from "./AppEn";
import AppEs from "./AppEs";

const App = () => {
  // State to manage current language
  const [language, setLanguage] = useState("en"); // default: English

  // Function to switch language
  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      {/* Navbar receives language state and switch function */}
      <Navbar switchLanguage={switchLanguage} currentLanguage={language} />

      {/* Render language-specific app content */}
      {language === "en" ? <AppEn /> : <AppEs />}
    </div>
  );
};

export default App;

// import { useState } from "react";
// import AppEn from "./AppEn";
// import AppEs from "./AppEs";

// function App() {
//   const [language, setLanguage] = useState("en");

//   return (
//     <>
//       <button onClick={() => setLanguage("en")}>EN</button>
//       <button onClick={() => setLanguage("es")}>ES</button>
//       {language === "es" ? <AppEs /> : <AppEn />}
//     </>
//   );
// }

// export default App;
