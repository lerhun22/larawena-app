/** @format */

import axios from "axios";
import Fiche from "../components/fiche";
import PropTypes from "prop-types";
import Legumes from "../components/Legumes/Legumes";

export default function About() {
	/* 
    const tab = axios.get('http://localhost:1337/legumes')
        .then(function (response) { console.log(response)}) // success
        .catch(function (error) {console.log("erreur") }) //si erreur
        .then(function () { console.log("executée") }); //toujours executé
    */

	const makeRequest = async () => {
		try {
			const res = await axios.get("http://localhost:1337/legumes");
			if (res.status === 200) {
				console.log(res);
				return true;
			}
			return false;
		} catch (err) {
			console.error(err);
			return false;
		}
	};

	//const test = makeRequest();
	{
		/*
    Card.propTypes = {
        legume: PropTypes.string.isRequired,
    }
    */
	}

	const tab = [
		{
			id: 1,
			legume: "tomate",
			prix: 2.3,
		},
		{
			id: 2,
			legume: "concombre",
			prix: 1.5,
		},
		{
			id: 3,
			legume: "salade",
			prix: 1.7,
		},
		{
			id: 4,
			legume: "choux rouge",
			prix: 2.9,
		},
	];

	//const listleg = tab.map( (leg) => <li>{leg.legume}</li>);

	//const listleg = tab.map((leg) => (
	//	<Card key={leg.id} legume={leg.legume} prix={leg.prix} />
	//));

	return (
		<div>
			<h1>Ma page about</h1>

			{/*
            
            <Card legume="concombre" prix={1.5} />
            
            {listleg}
            */}

			<Legumes listLegume={tab} />
		</div>
	);
}
