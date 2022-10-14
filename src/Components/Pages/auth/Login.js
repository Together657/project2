import { Grid, Card, Tabs, Tab, Box, makeStyles } from "@material-ui/core";
import { useState } from "react";
import SignUp from "./SignUp";
import UserLogin from "./UserLogin";

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
    height: "800px",
    margin: "auto",
    marginTop: "20px",
    //    marginRight:"5px",
    border: "none",
    borderRadius: "10px",
    //    backgroundColor:"#E6E6FA",

    // backgroundImage: "linear-gradient(180deg,  lightBlue 95%,lightGray 0%)",
  },
  // root1:{
  //     backgroundImage: "linear-gradient(180deg, black 50%, blue 50%)",
  //     height: "300px",
  //     width: "300px",
  //     marginBottom: "80px",
  // },
});
const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const Login = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row">
        <Grid
          item
          xs={6}
          marginRight={20}
          display={{ xs: "none", sm: "block" }}
        >
          {/* <img src='./Bis.png' height={1000} width={900} />/ */}
          <Card classes={classes.root1}></Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.root}>
            <Box>
              <Tabs value={value} textColor="secondary" onChange={handleChange}>
                <Tab label="Login"></Tab>
                <Tab label="Registration"></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignUp />
            </TabPanel>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
