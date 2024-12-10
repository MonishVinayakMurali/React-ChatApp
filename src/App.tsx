import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Stack } from '@fluentui/react';
import HeaderSection from './HeaderSection';
import ContentWrapper from './ContentWrapper';
import FooterSection from './FooterSection';

const App = ()=>{
  const props:any = {
    CopilotName: "Chat Copilot",
    headerTextColor: "white",
    headerBgColor: "#5674a3",
    chatScreenBgColor: "#ADD8E6",
    chatBgColor: "#ffffff",
    chatTextColor: "#000000",
    inputFieldTextColor: "#000000",
    inputFieldBgColor: "#ffffff",
    sendIconColor: "#5674a3",
  };
  const [response, setResponse] = React.useState([]);
  const [innerWidth, setInnerWidth] = React.useState("100%");
  return (
    <Stack
    id="Copilot"
    style={{
      backgroundColor: props?.chatScreenBgColor,
      height: "100vh",
      width: innerWidth,
      position: "relative",
      borderRadius: "10px",
      float: "right",
    }}
  >
    <HeaderSection
      inputColorProperty={props}
      innerWidth={innerWidth}
      setInnerWidth={setInnerWidth}
    />
    <Stack style={{ position: "relative", height: "75%", margin: "2vw" }}>
      <ContentWrapper
          responseObject={response}
          inputColorProperty={props}
      />
    </Stack>
    <FooterSection
      inputColorProperty={props}
      response={response}
      setResponse={setResponse}
    />
  </Stack>
  );
}

export default App;
