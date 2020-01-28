import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import PlayArrow from "@material-ui/icons/PlayArrow";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { green } from "@material-ui/core/colors";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/More";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import data from "./data";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(2),
    flexGrow: 1
  },
  paper: {
    paddingBottom: 50
  },
  container: {
    display: "flex",
    height: "100%"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  list: {},
  playingIcon: {
    svg: {
      fill: green.primary
    }
  }
}));
export function TaskGroup({ name, total, lastRun }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);
  return (
    <React.Fragment>
      <ListItem button onClick={toggle}>
        <ListItemText primary={name} secondary={lastRun} />
        <ListItemText primary="Today" secondary={total} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Started" secondary="10 May 2018" />
            <ListItemText primary="Duration" secondary="5 hours" />
          </ListItem>
        </List>
      </Collapse>
    </React.Fragment>
  );
}
export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.container}>
      <CssBaseline />
      <Paper square className={clsx(classes.paper, classes.grow)}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <PlayArrow classes={{ colorPrimary: classes.playingIcon }} />
            </ListItemIcon>
            <ListItemText primary="First task" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Started" secondary="13 may 2019" />
                <ListItemText primary="Duration" secondary="5 hours" />
              </ListItem>
            </List>
          </Collapse>
          {data.map(t => (
            <TaskGroup {...t} key={t.name} />
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.text} variant="h5" gutterBottom>
            00:10:55
          </Typography>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
