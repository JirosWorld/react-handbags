import React from "react";

function Tile({sectionTitle, sectionText, tileImage, children}) {
    //als er wel of geen plaatje is:
            if (tileImage) {
                console.log("Er is wél 'n afbeelding.");
                return (
                    <section>
                        <img src={tileImage} alt="tile alt"/>
                    </section>
                );
        } else if (!tileImage) {
                console.log("Er is géén afbeelding.");
                return (
                    <section>
                        <h1>{sectionTitle}</h1>
                        <p>{sectionText}</p>
                        {children}
                    </section>);
            }

}

export default Tile;
