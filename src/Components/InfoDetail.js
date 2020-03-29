import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    textAlign: "left"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
}));

export default function Info(activity) {
  // console.log(activity.data)
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const title = activity.data.placeFrom.placeDesc.length >= 21 ? activity.data.placeFrom.placeDesc.slice(0, 17) + "..." : activity.data.placeFrom.placeDesc
  const day = activity.data.timeFrom.slice(8, 10)
  const month = activity.data.timeFrom.slice(5, 7)
  const year = activity.data.timeFrom.slice(0, 4)
  const map = activity.data.mapImg

  const placeFrom = activity.data.placeFrom.placeDesc 
  const placeTo = activity.data.placeTo.placeDesc 
  const date = day + "-" + month + "-" + year
  const hour = activity.data.timeFrom.slice(-4)
  const duration = activity.data.timeDuration
  const type = activity.data.activityTypeTitle

  

  return (
    <div className="info-card">
      <Card className={classes.root}>
        <CardHeader
          avatar={<div className="info-detail--dot"></div>}
          action={
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
          title={title}
          subheader={date}
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardMedia className={classes.media} image={map} />
          <CardContent className="info-detail--card-detail color--secondary">
            <Typography variant="subtitle2" className="info-detail--title">
              Miejsce Rozpoczęcia:
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              className="info-detail--data"
            >
              {placeFrom}
            </Typography>

            <Typography variant="subtitle2" className="info-detail--title">
              Miejsce Zakończenia:
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              className="info-detail--data"
            >
              {placeTo}
            </Typography>

            <Typography variant="subtitle2" className="info-detail--title">
              Data i Godzina:
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              className="info-detail--data"
            >
              {date + " " + hour}
            </Typography>

            <Typography variant="subtitle2" className="info-detail--title">
              Czas trwania kontaktu:
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              className="info-detail--data"
            >
              {duration + " min"}
            </Typography>

            <Typography variant="subtitle2" className="info-detail--title">
              Typ kontaktu:
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              className="info-detail--data"
            >
              {type}
            </Typography>
            {/* <div>
              <h3 className="info-detail--title">Typ kontaktu:</h3>
              <p className="info-detail--data">{type}</p>
            </div> */}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

// export default info
