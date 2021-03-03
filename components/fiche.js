/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

const Fiche = (props) => {
	const classes = useStyles();

	console.log("props : ", props);

	const leg = props.legume;

	console.log("leg : ", leg);

	const img = "http://localhost:1337" + leg.image[0].url;
	const img3 = leg.image[0].url;
	const img2 = "http://localhost:1337/uploads/topinanmbour_324e25dbb3.jpeg";

	console.log("image", img, img2, img3);

	return (
		<div>
			{/** 1
             <h1>nom : {props.legume}</h1> 
            */}
			{/** 2
            
			<h1>
				nom : {leg.nom} / prix : {leg.prix_au_kilo} euros / image :{" "}
				{leg.image[0].url}
			</h1>
			*/}
			{/** 3
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component='img'
						alt={leg.nom}
						height='211'
						image={img}
						title={leg.nom}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{leg.nom}
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							{leg.description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size='small' color='primary'>
						Share
					</Button>
					<Button size='small' color='primary'>
						Learn More
					</Button>
				</CardActions>
			</Card>
			
			*/}
			{console.log("test : ", leg)}

			<li className='cards_item'>
				<div className='card'>
					<div className='card_image'>
						<img src={img} />
					</div>
					<div className='card_content'>
						<h2 className='card_title'>{leg.nom}</h2>
						<p className='card_text'>{leg.description}</p>
						<button className='btn card_btn'>Achetez</button>
					</div>
				</div>
			</li>
		</div>
	);
};

export default Fiche;
