/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Fiche from "../fiche";

const legumes = (props) => {
	const listLegumes = props.listLegume;
	console.log(listLegumes);

	const [legumes, setLegumes] = useState([]);

	useEffect(() => {
		async function loadLegumes() {
			try {
				const res = await axios.get("http://localhost:1337/legumes");
				if (res.status === 200) {
					setLegumes(res.data);
					console.log(res);
					return true;
				}
				return false;
			} catch (err) {
				console.error(err);
				return false;
			}
		}
		loadLegumes();
		console.log(legumes);
	}, []);

	const img = "https://picsum.photos/500/300/?image=10";

	const base = "http://localhost:1337";

	return (
		<div>
			{/** 
			<h1>Legumes from props (static)</h1>
			{listLegumes.map((leg, index) => (
				<p key={index}>
					{leg.id} {leg.legume} {leg.prix}
				</p>
			))}
			<h1>Legumes from state legumes (dynamique)</h1>
			{legumes.map((leg, index) => (
				<p key={index}>
					{leg.id} {leg.nom} {leg.prix_au_kilo}
					<Fiche key={leg.id} legume={leg} />
				</p>
			))}
			*/}

			<div className='main'>
				<h1>Légume du jour</h1>
				<ul className='cards'>
					{legumes.map((leg, index) => (
						<Fiche key={leg.id} legume={leg} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default legumes;
