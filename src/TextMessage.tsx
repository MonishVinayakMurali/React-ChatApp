import { Persona, PersonaSize, Stack } from "@fluentui/react";
import * as React from "react";

const TextMessage = ({
  text,
  alignStyle,
  personaName,
  inputColorProperty,
}: any) => {
  const textStyle: any = (alignText: string) => {
    const styleObject: any = {
      backgroundColor: inputColorProperty?.chatBgColor,
      textAlign: "left",
      wordWrap: "break-word",
      maxWidth: "40%",
      width: "fit-content",
      padding: "7px 20px",
      fontSize: "16px",
      borderRadius: "20px",
      color: inputColorProperty?.chatTextColor,
    };
    styleObject[`margin${alignText}`] = "auto";
    return styleObject;
  };
  return (
    <Stack
      style={{
        display: "flex",
        marginBottom: "10px",
        flexDirection: alignStyle === "Left" ? "row-reverse" : "row",
        justifyContent: "normal",
      }}
    >
      <Persona
        text=""
        size={PersonaSize.size40}
        styles={{ details: { display: "none" }, root: { margin: "0px 10px" } }}
      />
      <Stack style={textStyle(alignStyle)}>{text}</Stack>
    </Stack>
  );
};

export default TextMessage;
