import { JitsiMeeting } from "@jitsi/react-sdk";
import React, { useRef, useState } from "react";

const GitHubJisti = () => {
  const [api, setAPI] = useState(null);

  const [participantId, setParticipantId] = useState("");

  const handleApiReady = (externalAPI) => {
    console.log(externalAPI);
    // Add event listeners
    setAPI(externalAPI);
    externalAPI.addEventListener("participantJoined", (event) => {
      console.log("Participant joined:", event);
    });

    externalAPI.addEventListener("participantLeft", (event) => {
      console.log("Participant left:", event);
    });

    externalAPI.addEventListener("screenSharingStatusChanged", (event) => {
      console.log("Screen sharing status changed:", event);
    });

    externalAPI.addEventListener("incomingMessage", (event) => {
      console.log("Chat Box Updated", event);
    });

    externalAPI.addEventListener("outgoingMessage", (event) => {
      console.log("OutGoing Message", event);
    });
  };
  const executeCommandAndLog = (command, ...args) => {
    console.log(api);
    console.log(participantId);
    if (api) {
      api.executeCommand(command, ...args);
      console.log(`Executed command: ${command}`);
    } else {
      console.error("JitsiMeet API is not ready. Command execution aborted.");
    }
  };
  const getNumberOfParticipants = () => {
    if (api) {
      const numParticipants = api.getNumberOfParticipants();
      console.log(`Number of participants: ${numParticipants}`);
    } else {
      console.error("JitsiMeet API is not ready.");
    }
  };

  const getDisplayName = (participantId) => {
    if (api) {
      const displayName = api.getDisplayName(participantId);
      console.log(`Display name: ${displayName}`);
    } else {
      console.error("JitsiMeet API is not ready.");
    }
  };

  const isAudioMuted = () => {
    if (api) {
      const muted = api.isAudioMuted();
      muted.then((res) => console.log("Audio Muted:", res));
    } else {
      console.error("JitsiMeet API is not ready.");
    }
  };

  const getRoomsInfo = () => {
    if (api) {
      const roomsInfo = api.getRoomsInfo();

      roomsInfo.then((res) => console.log(`Rooms info:`, res));
    } else {
      console.error("JitsiMeet API is not ready.");
    }
  };

  return (
    <>
      <h1
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        JitsiMeeting Demo App
      </h1>
      <JitsiMeeting
        roomName="bdjfbkerihuvhavdavd"
        configOverwrite={{
          subject: "lalalala",
          requireDisplayName: true,
          startVideoMuted: 2,
          disablePolls: true,
          disableReactions: true,
          startWithAudioMuted: true,
          startWithVideoMuted: true,
        }}
        lang="en"
        onApiReady={(externalApi) => handleApiReady(externalApi)}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "400px";
        }}
      />
      <button
        className="bg-yellow-500 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={() => executeCommandAndLog("toggleRaiseHand")}
      >
        Raise Hand
      </button>
      <button
        className="bg-green-200 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={() => executeCommandAndLog("startRecording")}
      >
        Start Recording
      </button>
      <button
        className="bg-purple-400 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={() => executeCommandAndLog("stopRecording")}
      >
        Stop Recording
      </button>
      <input
        type="text"
        value={participantId}
        onChange={(e) => setParticipantId(e.target.value)}
        placeholder="Participant ID"
      />
      <button
        className="bg-orange-200 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={() => executeCommandAndLog("kickParticipant", participantId)}
      >
        Kick Participant
      </button>
      <button
        className="bg-red-300 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={() => executeCommandAndLog("pinParticipant", participantId)}
      >
        Pin Participant with ID
      </button>
      <button
        className="bg-blue-300 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={getNumberOfParticipants}
      >
        Get Number of Participants
      </button>
      <button
        className="bg-pink-400 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={() => getDisplayName(participantId)}
      >
        Get Display Name
      </button>
      <button
        className="bg-teal-600 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={isAudioMuted}
      >
        Check if Audio is Muted
      </button>
      <button
        className="bg-orange-600 m-2 text-white font-bold py-2 px-4 rounded"
        onClick={getRoomsInfo}
      >
        Get Rooms Info
      </button>
    </>
  );
};

export default GitHubJisti;
