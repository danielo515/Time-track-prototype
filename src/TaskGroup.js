import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  },
  taskOverView: {
    display: "flex"
  },
  leftItem: {
    flex: "0 1 auto"
  }
}));
export function TaskGroup({ name, total, lastRun }) {
  const css = useStyles();
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);
  console.log("rabo puto" + css.leftItem);
  return (
    <React.Fragment>
      <ListItem button onClick={toggle} className={css.taskOverView}>
        <ListItemText
          primary={name}
          secondary={lastRun + "rabo"}
          rabo={true}
          classes={{ root: css.leftItem, dense: "rabo" }}
        />
        RABO
        <ListItemText primary="Today" secondary={total} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={css.nested}>
            <ListItemText primary="Started" secondary="10 May 2018" />
            <ListItemText primary="Duration" secondary="5 hours" />
          </ListItem>
        </List>
      </Collapse>
    </React.Fragment>
  );
}
