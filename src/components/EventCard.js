import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Launch from "@material-ui/icons/Launch";

const styles = theme => ({
  event: {
    display: "flex"
  },
  eventDate: {
    alignSelf: "center",
  },
  eventDetails: {
    flex: 1,
    borderLeft: "1px dashed #ccc"
  },
  eventMedia: {
    width: 160
  }
});

class FeaturedEvent extends React.Component {
  render() {
    const { eventDetails, classes } = this.props;

    return (
      <Grid item key={eventDetails.title} xs={12} md={6}>
        <Card className={classes.event}>
          <Grid container>
            <Grid item xs={3} md={3} className={classes.eventDate}>
                <Typography gutterBottom variant="h2" align="center">
                  {eventDetails.date}
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {eventDetails.time}
                </Typography>
            </Grid>
            <Grid item key={eventDetails.title} xs={9} md={9}>
              <div className={classes.eventDetails}>
                <CardHeader
                  avatar={
                    <Avatar>
                      {eventDetails.avatar}
                    </Avatar>
                  }
                  action={
                    <IconButton>
                      <Launch />
                    </IconButton>
                  }
                  title={eventDetails.artists}
                  subheader={eventDetails.venue}
                />
                <CardContent>
                  <Typography gutterBottom component="h2" variant="h5">
                    {eventDetails.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" />
                  <Typography variant="subtitle1" paragraph>
                    {eventDetails.description}
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  }
}

FeaturedEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FeaturedEvent);
