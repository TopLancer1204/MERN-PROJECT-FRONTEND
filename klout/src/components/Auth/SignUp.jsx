import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../Design/Logo";
import Copyright from "../Design/Copyright";
import AuthService from "./authService";



export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.service = new AuthService();
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.service
      .signup(username, password)
      .then((response) => {
        this.setState({
          username: "",
          password: "",
        });
        this.props.getUser(response);
        this.props.history.push("/profile");
      })
      .catch((error) => console.log(error));
  };
  useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  render() {
    
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={this.useStyles.paper}>
            <Logo />

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form
              className={this.useStyles.form}
              noValidate
              onSubmit={this.handleSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="username"
                label="Username"
                type="username"
                id="username"
                autoComplete=""
                value={this.state.username}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChange}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={this.useStyles.submit}
              >
                Sign Up
              </Button>
              <Link href="/AddNetworks"> Sign Up </Link>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    {"Return to Home"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignIn" variant="body2">
                    {"Have an account? Sign in"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <br />
          <br />
          <Box mb={0}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}