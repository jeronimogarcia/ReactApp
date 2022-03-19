import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "../../App.css";

const MessageSuccess = ({ purchaseID, buyer }) => {
  return (
    <Stack className="alert" sx={{ width: "100%"}} spacing={2} >
      <Alert severity="success">
        Gracias por su compra {buyer.name} {buyer.lastName}! Su id de
        transacción es: {purchaseID}, sera enviado al mail: {buyer.email}.
      </Alert>
    </Stack>
  );
};

export default MessageSuccess;
