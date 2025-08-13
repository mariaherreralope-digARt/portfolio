import { useState, useEffect } from "react";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white px-4 py-3 text-sm flex justify-between items-center z-50">
      <p>
        We use cookies to improve your experience. By continuing, you agree to
        our{" "}
        <a href="/privacy-policy" className="underline hover:text-yellow-400">
          Privacy Policy
        </a>
        .
      </p>
      <button
        onClick={handleAccept}
        className="bg-yellow-500 text-gray-900 px-4 py-1 rounded hover:bg-yellow-400 transition"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsentBanner;
