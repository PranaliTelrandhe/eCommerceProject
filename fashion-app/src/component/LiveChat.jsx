import React, { useEffect, useState } from "react";

const LiveChat = () => {
  const [isChatLoaded, setIsChatLoaded] = useState(false);

  useEffect(() => {
    // Prevent multiple script
    if (window.Tawk_API) {
      setIsChatLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/679a15d93a8427326076b1a8/1iiouamk0";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    script.onload = () => {
      setIsChatLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to open chat
  const openChat = () => {
    if (window.Tawk_API && isChatLoaded) {
      window.Tawk_API.toggle(); // Open chat
    } else {
      alert("Live chat is not available right now. Please try again later.");
    }
  };

  return (
    <div>
      <button onClick={openChat} className="btn btn-primary">
        {isChatLoaded ? "Start Chat" : "Loading Chat..."}
      </button>
    </div>
  );
};

export default LiveChat;
