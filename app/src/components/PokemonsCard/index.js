import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const PokemonCard = (name, image, experience) => (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana" />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                My total experience - {experience}
            </Typography>
        </CardContent>
    </Card>
)

export default PokemonCard;