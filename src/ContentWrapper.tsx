import { Stack } from "@fluentui/react";
import * as React from "react";
import TextMessage from "./TextMessage";

const ContentWrapper = ({ responseObject, inputColorProperty }: any) => {
  const [botResponse, setBotResponse] = React.useState<any>({
    role: "Bot",
    message: "",
  });
  React.useEffect(() => {
    if(responseObject)
    if (responseObject[responseObject?.length-1]?.message)
      setTimeout(() => {
        setBotResponse({
          role: "Bot",
          message: "Thank you for your message! We will be back shortly!",
        });
      }, 1000);
  }, [responseObject]);
  const botResponseFunction = () => {
      return (
        <>
          {botResponse?.message !== "" && (
            <TextMessage
              inputColorProperty={inputColorProperty}
              text={botResponse?.message}
              alignStyle={botResponse?.role === "User" ? "Left" : "Right"}
              personaName={"User"}
            />
          )}
        </>
      );
  };
  return (
    <Stack
      styles={{
        root: {
          overflow: "auto",
          selectors: { "&::-webkit-scrollbar": { display: "none" } },
        },
      }}
    >
      {responseObject?.map((mess: any) => {
        return (
          <>
            {mess?.message !== "" && (
              <TextMessage
                inputColorProperty={inputColorProperty}
                text={mess?.message}
                alignStyle={"Left"}
                personaName={"Monish Vinayak"}
              />
            )}
            {botResponseFunction()}
          </>
        );
      })}
    </Stack>
  );
};

export default ContentWrapper;
