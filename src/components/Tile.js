import React from "react";

function Tile({sectionTitle, sectionText, tileImage, children}) {
    //als er wel of geen plaatje is:
            if ({tileImage} === false) {
                console.log("Er is geen afbeelding.");
            return (
                <section>
                    <h1>{sectionTitle}</h1>
                    <p>{sectionText}</p>
                    {children}
                </section>
            );
        } else
                console.log("Er is wel 'n afbeelding.");
            return (
                <section>
                    <img src={tileImage} alt="tile alt"/>
                </section>
            );
}

export default Tile;