import React from 'react';
import './App.css';
import ButtonNav from "./components/ButtonNav";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <button  type="button" onClick={() => {
                    console.log("to the collection");
                }}>
                    to the collection
                </button>
                <ButtonNav
                    type="button"
                    text="shop all bags"
                    log="shop all bags"
                />
                <button  type="button" disabled onClick={() => {
                    console.log("pre-orders");
                }}>
                    pre-orders
                </button>
            </nav>
        </>
    );
}

export default App;



