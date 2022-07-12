import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Login = () => {
  const paperStyle = {
    padding: 30,
    margin: "40px auto",
    height: "70vh",
    width: "80%",
    maxWidth: "500px",
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                height: "100%",
                fontSize: "2rem",
              }}
            >
              <h1 style={{ color: "#769de8" }}>todo</h1>
              <h3>Create a Todo List and stay organised</h3>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={10} style={paperStyle}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "20%",
                }}
              >
                <Avatar style={{ backgroundColor: "#04e1a3" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>Sign In</h2>
              </Box>
              <Box
                component="form"
                sx={{ mt: 1, height: "60%", borderBottom: "1px solid black" }}
              >
                <TextField
                  label="Username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  placeholder="Enter your username"
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  type="password"
                  placeholder="Password"
                  fullWidth
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    textTransform: "capitalize",
                    fontSize: "1rem",
                  }}
                  fullWidth
                >
                  Sign In
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    mt: 3,
                    mb: 2,
                    textTransform: "capitalize",
                    fontSize: "1rem",
                  }}
                  fullWidth
                >
                  Create New Account
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Login;
