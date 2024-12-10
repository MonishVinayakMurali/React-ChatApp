import { Icon, Stack } from "@fluentui/react";
import * as React from "react";

const HeaderSection = ({
  inputColorProperty,
  setInnerWidth,
}: any) => {
    const windowWidth:any = document?.getElementById("Copilot")?.clientWidth;
  const [expand, setExpand] = React.useState(windowWidth >= 750 ? true : false);
  const expandFunction = () => {
    setExpand(!expand);
    if (!expand) setInnerWidth("50%");
    else setInnerWidth("100%");
  };
  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      style={{
        position: "sticky",
        top: 0,
        height: "50px",
        backgroundColor: inputColorProperty?.headerBgColor,
        borderRadius:"10px 10px 0px 0px"
      }}
    >
      <Stack
        style={{
          margin: "8px 10px",
          color: inputColorProperty?.headerTextColor,
          fontWeight: 600,
          fontSize: "20px",
          textAlign: "start",
        }}
      >
        {inputColorProperty?.CopilotName}
      </Stack>
      <Stack>
        <Icon
          iconName={!!expand ? "MiniExpand" : "MiniContract"}
          onClick={expandFunction}
          style={{
            margin: "13px",
            fontSize: "20px",
            color: inputColorProperty?.headerTextColor,
            cursor: "pointer",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default HeaderSection;
