import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cardData } from "./cardData";
import "./HomeCard.css";

export default function HomeCard() {
  return (
    <div className="homeCard">
      {cardData.map((card) => (
        <Card id="cards" sx={{ maxWidth: 345 }} key={card.brandName}>
          <CardMedia
            sx={{ height: 140 }}
            image={card.cardImg}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.brandName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.Description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
