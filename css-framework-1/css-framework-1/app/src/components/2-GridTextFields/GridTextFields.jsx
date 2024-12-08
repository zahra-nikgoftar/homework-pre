import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Textarea from "@mui/joy/Textarea";
export default function GridTextFields() {

    
  return (
    <Container fixed>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ py: "1rem" }}
      >
        <TextField
          id="outlined-Full Name"
          label="Full Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="outlined-Username"
          label="Username"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="outlined-Age"
          label="Age"
          variant="outlined"
          fullWidth
          required
        />
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 2, md: 1 }}
        sx={{ py: "0.5rem" }}
      >
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          required
        />
      </Stack>
      <Stack spacing={2} sx={{ py: "0.75rem" }}>
        <Textarea
          placeholder="Bio"
          variant="outlined"
          minRows={3} 
          maxRows={5} 
          sx={{ width: "100%", marginTop: "1rem", py: "1rem" }}
        />
      </Stack>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        sx={{ py: "0.75rem" }}
      >
        Sign up
      </Button>
    </Container>
  );
}
