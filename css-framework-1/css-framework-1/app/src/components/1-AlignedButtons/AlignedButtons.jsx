import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

export default function AlignedButtons() {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => {
    setIsDisabled(true);
  };
  return (
    <>
      <Stack spacing={2} direction="row" sx={{ padding: "1rem" }}>
        <Button
          variant="text"
          onClick={handleClick}
          disabled={isDisabled}
          sx={{ py: "0.5rem", px: "2rem" }}
        >
          Text
        </Button>
        <Button
          variant="contained"
          startIcon={<PersonIcon />}
          sx={{ py: "0.5rem", px: "2rem" }}
        >
          Contained
        </Button>
        <Button
          variant="outlined"
          href="https://mui.com/material-ui/react-button/#text-buttons"
          sx={{ py: "0.5rem", px: "2rem" }}
        >
          Outlined
        </Button>
      </Stack>
    </>
  );
}
