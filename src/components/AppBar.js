import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbarSecondary: {
    justifyContent: "space-between"
  },
  inputInput: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Toolbar className={classes.toolbarMain}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            className={classes.toolbarTitle}
          >
            ClassicalSG
          </Typography>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputInput
            }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Toolbar>
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          April
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          2019
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </Toolbar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);