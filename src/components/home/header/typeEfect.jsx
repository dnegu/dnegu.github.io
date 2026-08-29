import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate mt-5 text-3xl font-bold">
      <Typewriter
        options={{
          strings: [
            "Senior Android Engineer",
            "Mobile Technical Lead",
            "Kotlin Multiplatform (KMP)",
            "Compose Multiplatform",
            "Clean Architecture & Offline-First",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
