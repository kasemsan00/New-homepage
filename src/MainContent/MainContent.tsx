import React from "react";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

export default function MainContent() {
    return (
        <div className="main-content">
            <div className="main-detail-left">
                <ContentLeft />
            </div>
            <div className="main-detail-right">
                <div className="main-detail-right-title">New</div>
                <ContentRight header="Hydrogen VS Electric Cars" content="Will hydrogen-fueled cars ever catch up to EVs?" />
                <hr />
                <ContentRight
                    header="The Downsides of AI Artistry"
                    content="What are the possible adverse effects of on-demand AI image generation?"
                />
                <hr />
                <ContentRight
                    header="Is VS Funding Drying Up?"
                    content="Private funding by VS firms is down 50% YO. We take a look at what that means."
                ></ContentRight>
            </div>
        </div>
    );
}
