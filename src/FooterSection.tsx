import * as React from "react";
import { Icon, Stack, TextField } from "@fluentui/react";

const FooterSection = ({ inputColorProperty, response, setResponse }: any) => {
  const [value, setValue] = React.useState("");
  const suggestionArray = ["Suggestion 1","Suggestion 2", "Suggestion 3"]
  return (
    <>
    <Stack style={{display:"flex",flexDirection:"row"}}>
    {suggestionArray.map((el)=>{
      return(
      <Stack
      style={{
        width: "fit-content",
        height: "5vh",
        margin:"0px 20px",
        backgroundColor: inputColorProperty?.inputFieldBgColor,
        borderRadius:"10px",
        color: "#5674a3",
        padding:"7px",
        fontWeight:600,cursor:"pointer"
      }}
      onClick={()=>setValue(el)}
    >
      {el}
    </Stack>
      )
    })}
</Stack>
      <Stack
        style={{
          position: "sticky",
          bottom: 20,
          left: 20,
          margin: "15px",
          width: "98%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          borderless
          styles={{
            root: {
              width: "95%",
              borderRadius: "10px",
              backgroundColor: inputColorProperty?.inputFieldBgColor,
              textAlign: "start",
              padding: 5,
            },
            field: { color: inputColorProperty?.inputFieldTextColor },
          }}
          placeholder="Please enter your query"
          value={value}
          onChange={(e, val: any) => setValue(val)}
        />
        <Icon
          iconName="Send"
          style={{
            color: inputColorProperty?.sendIconColor,
            cursor: "pointer",
            fontSize: "30px",
            margin: "5px 30px 5px 20px",
          }}
          onClick={() => {
            setResponse([...response, { role: "User", message: value }])
              setValue("");
          }}
        />
      </Stack>
    </>
  );
};

export default FooterSection;
