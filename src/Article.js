import React from "react";

const Article = ({ title = 'Заголовку не визначено', author = 'Автор не визначений', text = 'Тексту не визначено' }) => {
    return (
        <div style={styles.article}>
            <h1>{title}</h1>
            <span>{author}</span>
            <p>{text}</p>
        </div>
    );
};

export default Article;

const styles = {
    article: {
        border: "1px solid #000",
        padding: "10px",
        margin: "5px",
        borderradius: "5px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }
};