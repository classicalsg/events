import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import EventCard from "./EventCard";

const styles = theme => ({
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

const concertsList = [
  {
    date: "1",
    time: "12:30 PM",
    venue: "Victoria Concert Hall",
    title: "No Orchestra? No Problem",
    artists: "VCH Organ Series Martin Setchell (org)",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "3",
    time: "7:30 PM",
    venue: "Victoria Concert Hall",
    title: "Springing",
    artists: "YST Graduating performers",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "5",
    time: "7:30 PM",
    venue: "Esplanade Concert Hall",
    title: "Video Games Classics",
    artists: "Singapore Symphony Orchestra Eimear Noone (cond)",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "6",
    time: "7:30 PM",
    venue: "Esplanade Recital Studio",
    title: "Much A-dur About Nothing",
    artists: "Lee Shi Mei (vln) and Lim Yan (pno)",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "6",
    time: "8:00 PM",
    venue: "TBA",
    title: "Vexilla Regis",
    artists: "Capella Martialis",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "7",
    time: "5:00 PM",
    venue: "Victoria Concert Hall",
    title: "The Complete Sibelius Symphonies (1)",
    artists: "The Philharmonic Orchestra",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "7",
    time: "7:45 PM",
    venue: "Goodman Arts Centre",
    title: "All About Love",
    artists: "The Mad Scene",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "7",
    time: "8:00 PM",
    venue: "TBA",
    title: "Vexilla Regis",
    artists: "Capella Martialis",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "9",
    time: "7:30 PM",
    venue: "Esplanade Concert Hall",
    title: "Intersections",
    artists: "YST Orchestra Jason Lai (cond)",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "12",
    time: "7:30 PM",
    venue: "Esplanade Concert Hall",
    title: "Dark Majesty, Wild Excellence",
    artists: "Singapore Symphony Orchestra",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "13",
    time: "7:30 PM",
    venue: "Esplanade Recital Studio",
    title: "Music Romantic and Modern",
    artists: "Kenneth Hamilton (pno)",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "18",
    time: "6:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Visiting Artist Series",
    artists: "Kevin Thompson and Chris Moyse Brass Duo Recital",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "18",
    time: "7:30 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Masters of American Opera",
    artists: "Cantiamo",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "18",
    time: "7:30 PM",
    venue: "Esplanade Concert Hall",
    title: "Song of the Nightingale",
    artists: "Singapore Symphony Orchestra Choo Huey (cond)",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "20",
    time: "1:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "5 hour-long viola recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "21",
    time: "5:00 PM",
    venue: "School of the Arts",
    title: "Old Worlds for New",
    artists: "Braddell Heights SO & Joy Chorale",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "22",
    time: "1:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "6 hour-long cello and bass recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "23",
    time: "1:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: " 2 hour-long piano recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "23",
    time: "4:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "2 hour-long voice recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "23",
    time: "7:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "2 hour-long percussion recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "24",
    time: "1:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "2 hour-long piano recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "24",
    time: "4:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "4 hour-long violin recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "25",
    time: "1:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "3 hour-long violin recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "25",
    time: "6:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "3 hour-long brass recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "26",
    time: "7:30 PM",
    venue: "Victoria Concert Hall",
    title: "Music of the Spheres",
    artists: "Aurora Orchestra Pekka Kuusisto (vln), Nicholas Collon (cond)",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "27",
    time: "1:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "2 hour-long violin recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "27",
    time: "4:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "4 hour-long piano recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "27",
    time: "7:30 PM",
    venue: "Esplanade Concert Hall",
    title: "A Scottish Journey",
    artists: "Singapore Symphony Orchestra",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "27",
    time: "8:00 PM",
    venue: "Singapore Conference Hall",
    title: "Homecoming",
    artists: "Singapore Chinese Orchestra",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "29",
    time: "1:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "6 hour-long woodwind recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "30",
    time: "2:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: " 2 hour-long oboe recitals",
    link: "https://www.sistic.com.sg",
  },
  {
    date: "30",
    time: " 5:00 PM",
    venue: "YST Conservatory Orchestra Hall",
    title: "Senior Recitals",
    artists: "4 hour-long French horn recitals",
    link: "https://www.sistic.com.sg",
  }
];

class FeaturedEvent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={40} className={classes.cardGrid}>
        <Grid item xs={12} md={8}>
          <Typography variant="h3" gutterBottom>
            April
          </Typography>
          <Divider />
        </Grid>
        {concertsList.map(post => (
          <EventCard eventDetails={post} />
        ))}
      </Grid>
    );
  }
}

FeaturedEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FeaturedEvent);
