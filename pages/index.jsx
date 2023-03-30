import {useState} from 'react';

function CreateProjectBox({link, image, alt, tooltip}){
	return (
		<div className = "box">
			<a href={link}>
				<img src={image} alt={alt} />  
			</a>
			{tooltip && <span className="tooltiptext">{tooltip}</span>}
		</div>
	);
}

function FillWithWIP(count){
	let content = [];

	for (let i = 0; i < count; i++){
		content.push(<CreateProjectBox link = "https://github.com/HenriMalahieude" image = "wip.png" alt = "WIP"/>);
	}

	return content;
}

export default function MainPage(){
	//const tabs = ["Home", "Projects", "Publications", "Socials"];
	//const [curTab, setCurTab] = useState();
	
	return (
		<>
			<title>{"Henri Malahieude's Portfolio"}</title>
			<header className="header">{"Henri Malahieude's Portfolio"}</header>
			<header className="header2">Click any button!</header>
			<div className = "grid">
				<CreateProjectBox 
					link = "https://henrimalahieude.github.io/VisualMazeGenerator/"
					image = "VisualMazeGenerator.png"
					alt = "Maze Playground"
					tooltip="(Requires WebGL)"/>
				<CreateProjectBox 
					link = "https://henrimalahieude.github.io/Chess/"
					image = "ChessGame.png"
					alt = "Chess Game"
					tooltip="(Requires WebGL)"/>
				<CreateProjectBox 
					link = "https://pkg.go.dev/github.com/HenriMalahieude/GoStructures"
					image = "bst.png"
					alt = "Structures Library for GoLang"/>
				<CreateProjectBox 
					link = "https://henrimalahieude.github.io/GoPerlinNoise/"
					image = "perlin.png"
					alt = "Perlin Noise Generator"
					tooltip = "(Requires WASM)"/>
				<CreateProjectBox 
					link = "https://youtu.be/Z2UKC_wSfbI"
					image = "radar.png"
					alt = "Radar Embedded System Project"/>

				{FillWithWIP(6)}

				<div className = "box">
					<a href="https://github.com/HenriMalahieude">
						<img className="invert" src="github.png" alt="My Github" />  
					</a>
				</div>
			</div>
		</>
	);
}