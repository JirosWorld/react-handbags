import React from 'react';
import './App.css';
import ButtonNav from "./components/ButtonNav";
//alle images:
import bag1Handy from "./assets/bag_1.png";
import bag2Stylish from "./assets/bag_2.png";
import bag3Simple from "./assets/bag_3.png";
import bag4Trendy from "./assets/bag_4.png";
import brandImg from "./assets/brand.png";
import ourstoryImg from "./assets/our_story.png";
//componenten
import Product from "./components/Product";
import Tile from "./components/Tile";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <ButtonNav
                    type="button"
                    text="to the collection"
                />
                <ButtonNav
                    type="button"
                    text="shop all bags"
                />
                <button  type="button" disabled onClick={() => {
                    console.log("pre-orders");
                }}>pre-orders</button>
            </nav>
            <main>
                <Product
                    productLabel="Best seller"
                    productImage={bag1Handy}
                    productName="The handy bag"
                    productPrice="400"
                    />
                <Product
                    productLabel="Best seller"
                    productImage={bag2Stylish}
                    productName="The stylish bag"
                    productPrice="250"
                />
                <Product
                    productLabel="New collection"
                    productImage={bag3Simple}
                    productName="The simple bag"
                    productPrice="300"
                />
                <Product
                    productLabel="New collection"
                    productImage={bag4Trendy}
                    productName="The trendy bag"
                    productPrice="150"
                />
            </main>
            <footer>
                <Tile
                    sectionTitle="sectiontitel"
                    sectionText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequuntur cupiditate deleniti ipsum molestiae neque non, repellat tenetur sunt."
                />
                <Tile
                    tileImage={brandImg}
                />
                <Tile
                    tileImage={ourstoryImg}
                />
                <Tile
                    sectionTitle="sectiontitel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequuntur cupiditate deleniti ipsum molestiae neque non, repellat tenetur sunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequuntur cupiditate deleniti ipsum molestiae neque non, repellat tenetur sunt.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



