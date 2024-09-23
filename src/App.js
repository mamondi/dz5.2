import React from "react";
import Article from "./Article";

function App() {
    return(
        <div className="App" style={{ border: "1px solid #ccc", padding: "20px", margin: "20px", borderRadius: "10px" }}>
            <h1>Статті</h1>
            <article><Article title="Стаття 1" author="Дмитро" text="Текст текст текст текст"/></article>
            <article><Article title="Стаття 2" author="Дмитро"/></article>
            <article><Article title="Стаття 3"/></article>
            <article><Article/></article>
        </div>
    )
}

export default App;