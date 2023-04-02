import Head from 'next/head';

/* Project Container */
function CreateProjectBox({link, image, alt, tooltip, kassign, inverted, title, githubLink}){
	let picClass = "projectImage"
	if (inverted){
		picClass = "projectinvertImage"
	}

	return (
		<div className = "box" key={kassign}>
			<a href={link} key={kassign}>
				<img className={picClass} src={image} alt={alt}/>
				{title && <div className="imageTitle">{title}</div>}
				{githubLink && <a href={githubLink}><img className="githubIcon" src="pictures/github.png" alt="Project GitHub"/></a>}
			</a>
			
			{tooltip && <span className="tooltiptext">{tooltip}</span>}
		</div>
	);
}

function FillWithWIP(count){
	let content = [];

	for (let i = 0; i < count; i++){
		content.push(<CreateProjectBox link = "#Projects" image = "pictures/wip.png" alt = "WIP" key={String(i*10)}/>);
	}

	return content;
}

function ProjectGenerate(){
	return (
	<div className = "projectsContainer">
		<CreateProjectBox kassign={"1"}
			link = "https://henrimalahieude.github.io/VisualMazeGenerator/"
			githubLink="https://github.com/HenriMalahieude/VisualMazeGenerator"
			image = "pictures/VisualMazeGenerator.png"
			alt = "Maze Playground IMG"
			title = "Maker and Solver Playground"
			tooltip={<a href="https://get.webgl.org/">(Requires WebGL)</a>}/>
		<CreateProjectBox kassign={"2"}
			link = "https://henrimalahieude.github.io/Chess/"
			githubLink="https://github.com/HenriMalahieude/Chess"
			image = "pictures/ChessGame.png"
			alt = "Chess IMG"
			title = "Chess"
			tooltip={<a href="https://get.webgl.org/">(Requires WebGL)</a>}/>
		<CreateProjectBox kassign={"3"}
			link = "https://pkg.go.dev/github.com/HenriMalahieude/GoStructures"
			githubLink="https://github.com/HenriMalahieude/GoStructures"
			image = "pictures/bst.png"
			title="Golang Data-Structures Package"
			alt = "Structures Library for GoLang"/>
		<CreateProjectBox kassign={"4"}
			link = "https://henrimalahieude.github.io/GoPerlinNoise/"
			githubLink="https://github.com/HenriMalahieude/GoPerlinNoise"
			image = "pictures/perlin.png"
			alt = "Perlin IMG"
			title = "Perlin Noise Generator"
			tooltip = "(Requires WASM)"/>
		<CreateProjectBox kassign={"5"}
			link = "https://youtu.be/Z2UKC_wSfbI"
			githubLink="https://github.com/HenriMalahieude/RadarModel"
			image = "pictures/radar.png"
			title = "Embedded Systems Final"
			alt = "Radar IMG"/>

		{FillWithWIP(11)}
	</div>
	);
}

/* List Items */
function ListItem({image, alt, text, link, tooltip, inverted, title}){
	return (
		<div className="listItem" key={String(image) + " " + String(alt)}>
			<CreateProjectBox link={link} image={image} alt={alt} tooltip={tooltip} kassign="1" inverted={inverted}/>
			<p className="separator"></p>
			<div className="txtContainer">
				<header className="header2">{title}</header>
				<div>{text}</div>
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

	let homeText = "Welcome to Henri's Website. Designed originally with pure HTML and CSS, Henri decided that that his long hours of toil against the browser gods were fruitless. He then switched to NextJS, a React Framework. That way he could remove the pain of working with raw html, and instead work with raw html. Wait."
	let homeText2 = "Henri Malahieude is an experienced Software Engineer with an extensive history of working in the software industry. Skilled in C++ and Software Development, Henri can execute any solution or problem presented to him. Focused on earning a Bachelor's of Science in Computer Science from University of California - Riverside, Henri has plans to then go into Graduate School for a PhD."
	
	return (
		<div>
			<Head>
				<title>{"Henri Malahieude"}</title>
				<link rel="icon" href='favicon.ico' />
			</Head>

			<link rel="stylesheet" href="style.css"/>
			<NavBar />
			
			<div className="allContainer">
				<div className='tabContainer' id="Home"> <br/> </div>
				<div className='tabContainer' id="Projects"> <br/> </div>
				<div className='tabContainer' id="Publications"> <br/> </div>
				<div className='tabContainer' id="Links"> <br/> </div>
			</div>
			{/*The above thing lets us move side to side without fucking the scroll*/}
			<div className="allContainer">
				<div className='tabContainer'>
					<div className='justifier'>
						<header className='header1'>Home</header>
						<div> <br/> <br/> <br/> </div>
						<div className="listItem" key={"Bruh"}>
							<p className="separator"></p>
							<div className = "box">
								<a href="#Home">
									<img className="meImage1" src="pictures/picofme1.jpg" alt="A picture of me when I was young." />
								</a>
							</div>
							<p className="separator"></p>
							<div className="txtContainer">
								<div>{homeText}</div>
								<div> <br/> </div>
								<div>{homeText2}</div>
								<div> <br/> <br/> </div>
								<div>Click through the navbar, see what I've done so far in my life!</div>
							</div>
						</div>
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
						<ListItem image="pictures/wip.png" link="#Publications" alt="WIP1" tooltip="There ain't nothing here sorry." title="Hoping for success" text="This will be populated as soon as I get more stuff to put here......."/>
					</div>
				</div>
				<div className='tabContainer'>
					<div className='justifier'>
						<header className='header1'>Mega Link Zone</header>
						<ListItem image="pictures/github.png" link="https://github.com/HenriMalahieude" alt="My Public Github Account" inverted="True" title="My Github" text="Just click the icon to get sent to my github!"/>
						<ListItem image="pictures/linkedin.png" link="https://www.linkedin.com/in/henri-malahieude/" alt="My Linkedin Account" title="My Linkedin" text="Just click the icon to get sent to my Linkedin!"/>
						
						<div className="listItem" key={"Was that a short joke?"}>
							<div className = "box">
								<a href="files/current_resume.pdf" download="Henri Malahieude's Current Resume">
									<img className="projectImage" src="pictures/resume_thumbnail.png" alt="Resume Thumbnail" />
								</a>
								
								<span className="tooltiptext">Click To Download!</span>
							</div>
							<p className="separator"></p>
							<div className="txtContainer">
								<header className="header2">Henri's Resume</header>
								<div>Click on the thumbnail!<br/>Last Updated: April 1st, 2023</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}