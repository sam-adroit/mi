import React, { useState, createContext, useEffect, useCallback } from "react";
import useWebSocket from "react-use-websocket";

export const InverterDetailsContext = createContext();

function InverterDetailsContextProvider(props) {
  var payload = JSON.stringify({
    action: "subscribe_device",
    data: {
      deviceId: "mo0001",
    },
  });

  const { sendMessage, lastMessage } = useWebSocket(
    "wss://6tuqhjv364.execute-api.us-east-1.amazonaws.com/dev"
  );

  const handleClickSendMessage = useCallback(
    () => sendMessage(payload),
    [sendMessage, payload]
  );
  // const handleClickSendMessage = useCallback(() => {
  //   console.log("Sending to web socket");
  //   sendMessage(payload);
  // }, [sendMessage, payload]);

  const [inverterDetail, SetInverterDetails] = useState({});

  useEffect(() => {
    if (lastMessage !== null) {
      let event = JSON.parse(lastMessage.data).event;
      let inverterReadings = JSON.parse(lastMessage.data).data.deviceData;
      console.log(inverterReadings);
      event === "new_data" && SetInverterDetails(inverterReadings);
    }
  }, [lastMessage]);

  return (
    <InverterDetailsContext.Provider
      value={{ inverterDetail, handleClickSendMessage }}
    >
      {props.children}
    </InverterDetailsContext.Provider>
  );
}

export default InverterDetailsContextProvider;
