import {useState} from 'react';
import Head from 'next/head';

function CreateProjectBox({link, image, alt, tooltip, kassign}){
	return (
		<div className = "box" key={kassign}>
			<a href={link} key={kassign}>
				<img src={image} alt={alt} />  
			</a>
			{tooltip && <span className="tooltiptext">{tooltip}</span>}
		</div>
	);
}

function FillWithWIP(count){
	let content = [];

	for (let i = 0; i < count; i++){
		content.push(<CreateProjectBox link = "https://github.com/HenriMalahieude" image = "wip.png" alt = "WIP" key={String(i*10)}/>);
	}

	return content;
}

function ProjectGenerate(){
	return (
	<div className = "projectsContainer">
		<CreateProjectBox kassign={"1"}
			link = "https://henrimalahieude.github.io/VisualMazeGenerator/"
			image = "VisualMazeGenerator.png"
			alt = "Maze Playground"
			tooltip="(Requires WebGL)"/>
		<CreateProjectBox kassign={"2"}
			link = "https://henrimalahieude.github.io/Chess/"
			image = "ChessGame.png"
			alt = "Chess Game"
			tooltip="(Requires WebGL)"/>
		<CreateProjectBox kassign={"3"}
			link = "https://pkg.go.dev/github.com/HenriMalahieude/GoStructures"
			image = "bst.png"
			alt = "Structures Library for GoLang"/>
		<CreateProjectBox kassign={"4"}
			link = "https://henrimalahieude.github.io/GoPerlinNoise/"
			image = "perlin.png"
			alt = "Perlin Noise Generator"
			tooltip = "(Requires WASM)"/>
		<CreateProjectBox kassign={"5"}
			link = "https://youtu.be/Z2UKC_wSfbI"
			image = "radar.png"
			alt = "Radar Embedded System Project"/>

		{FillWithWIP(6)}

		<div className = "box" key={"88"}>
			<a href="https://github.com/HenriMalahieude">
				<img className="invert" src="github.png" alt="My Github" />  
			</a>
		</div>
	</div>
	);
}

function NavBar(){
	return (
		<nav className="anchored">
			<div><a href="#Home">Home</a></div>
			<div><a href="#Projects">Projects</a></div>
			<div><a href="#Publications">Publications</a></div>
			<div><a href="#Links">Mega Link Zone</a></div>
		</nav>
	);
}

export default function MainPage(){
	//const tabs = ["Home", "Projects", "Publications", "Socials"];
	//const [curTab, setCurTab] = useState();
	
	return (
		<div>
			<Head>
				<title>{"Henri Malahieude"}</title>
				<link rel="shortcut icon" href='/favicon.ico' />
			</Head>

			<link rel="stylesheet" href="style.css"/>
			<NavBar />
			
			<div className="allContainer">
				<div className='tabContainer' id="Home"> <br/> </div>
				<div className='tabContainer' id="Projects"> <br/> </div>
				<div className='tabContainer' id="Publications"> <br/> </div>
				<div className='tabContainer' id="Links"> <br/> </div>
			</div>
			{/*The above thing lets us move side to side*/}
			<div className="allContainer">
				<div className='tabContainer'>
					<div className='justifier'>
						<header className='header1'>Home</header>
					</div>
				</div>
				<div className='tabContainer'>
					<div className='justifier'>
						<header className='header1'>Projects</header>
						<ProjectGenerate/>
					</div>
				</div>
				<div className='tabContainer'>
					<div className='justifier'>
						<header className='header1'>Publications</header>
					</div>
				</div>
				<div className='tabContainer'>
					<div className='justifier'>
						<header className='header1'>Mega Link Zone</header>
					</div>
				</div>
			</div>
		</div>
	);
}