import "./App.css";
import Logo from "./Logo";
import Menu from "./Menu";
import ContentRight from "./MainContent/ContentRight";

export default function App() {
	console.log("x");
	return (
		<div className="app">
			<div className="main-content">
				<div className="top-menu">
					<Logo />
					<Menu />
				</div>
				<div className="main-detail-right">
					<div className="main-detail-right-title">New</div>
					<ContentRight
						header="Hydrogen VS Electric Cars"
						content="Will hydrogen-fueled cars ever catch up to EVs?"
					/>
					<ContentRight
						header="The Downsides of AI Artistry"
						content="What are the possible adverse effects of on-demand AI image generation?"
					/>
					<ContentRight
						header="Is VS Funding Drying Up?"
						content="Private funding by VS firms is down 50% YO. We take a look at what that means."
					/>
				</div>
			</div>
		</div>
	);
}
