import React, { useEffect, useState } from 'react';
import Navigation from "../components/Navigation";
import Logo from '../components/Logo';
import axios from 'axios';
import Article from '../components/Article';

const Blog = () => {
    //Variable qui stocke contenu du blog: on va stocker ce qu il y a dans l'input dans la variable, dans le states, et on incrémente l'évenement ds textearea, on change le contenu à l'évenement
    const [blogData, setBlogData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    const getData = () =>{
        axios
        .get("http://localhost:3004/articles")
        .then((res)=> setBlogData(res.data));
    };
    useEffect(() =>getData(),[]);

    //Fonction handleSubmit: On a un formulaire qui quand il est soumis, ça actionne la fonction handleSubmit
    const handleSubmit =(e)=>{
        e.preventDefault();//empeche le formulaire de recharger la page

        if(content.length<140){//on met une variable erreur sur false de base et si erreur, elle se met sur true si le message est inférieur à 140 caractères
            setError(true);
        }else{
            axios.post("http://localhost:3004/articles", {
                author,
                content,
                date: Date.now()
            })
            setError(false);
            setAuthor("");
            setContent("");
            getData();
        }
    };

    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>

            <form onSubmit={(e) => handleSubmit(e)}> 
                <input type="text" 
                placeholder="Nom" 
                onChange={(e)=> setAuthor(e.target.value)}
                value={author}
                />
                <textarea 
                style={{ border: error ? "1px solid red" : "1px solid #61dafb"}}
                placeholder="Message" 
                onChange={(e) => setContent(e.target.value)}
                value={content}
                ></textarea>
                {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
                <input type="submit" value="Envoyer" />
            </form>
            <ul>
                {blogData
                    .sort((a, b) => b.date - a.date)
                    .map((article)=>(
                    <Article key ={article.id} article={article}/>
                ))}
            </ul>
        </div>
    );
};

export default Blog;