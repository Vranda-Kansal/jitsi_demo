// App.js
import React, { useState } from "react";
import JitsiMeetingComponent from "./JitsiMeetingComponent";
import GitHubJitsi from "./GitHubJisti";

const App = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const handleFirstScreen = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };
  const handleSecondScreen = () => {
    setFirst(false);
    setThird(false);
    setSecond(true);
  };

  const handleThirdScreen = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };
  return (
    <div>
      <button
        className="bg-red-400 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={handleFirstScreen}
      >
        Screen 1
      </button>
      <button
        className="bg-red-400 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={handleSecondScreen}
      >
        Screen 2
      </button>
      {first && <GitHubJitsi />}
      {second && <JitsiMeetingComponent />}
      {/* <button onClick={handleThirdScreen}>Screen 3</button> */}
      {/* {third && (
        <JitsiMeetingComponent
          roomName={"ThirdRoomjbeuheiqwuhei"}
          configOverwrite={{
            startWithAudioMuted: true,
            startWithVideoMuted: true,
            startAudioOnly: true,
            enableWhiteboard: false,
            enableRaiseHand: false,
            enableChat: false,
            etherpad_integration_enabled: false, // welcome page -> false
          }}
        />
      )} */}
    </div>
  );
};

export default App;
