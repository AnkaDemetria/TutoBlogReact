Reprendre un projet React : `npm i`

Installer JSON-SERVER : `npm i -g json-server`
Faire tourner le back : `json-server --w src/assets/db.json --port 3004`

//json server permet de ne pas avoir besoin d'un back

BASES REACT 
Tutoriel: https://www.youtube.com/watch?v=f0X1Tl8aHtA&list=PL47mbG8wjY1CxV8En7M_R3_MD7slTzUIJ&index=1



#Présentation & Installation#
Présentation
Tout est composant
1 composant = 1 fonctionnalité
import….from…
fonction()
return(JSX): rendu visuel (comme du HTML avec des classes)
commentaire: “ctrl + /”

#Installation#
Dans la console: (contrôle %)
cd desktop
node -v
npm -v (pour connaître les versions node et npm)

npx create-react-app nom-projet (pour créer un dossier, pas de majuscule )

ça va créer le dossier react avec les fichiers suivants:
node.module = toutes nos bibliothèques
gitignore: tout ce qu’on ne veut pas voir sur github dont les node.modules
package.json: on a les versions de nos projets, toutes les dépendances ajoutées au projet
src: source, c ‘est là dedans qu’on va coder
public: on peut y stocker des images, des icônes

On a besoin de compiler tout ce qui est dans la bibliothèque et tout le src, donc on fait un npm start pour voir notre projet pas un go live

Dans ces fichiers on va supprimer certaines choses pour démarrer sur des fichiers propres:
-logo512
-manifest .json
-index.html:fichier lu le premier toujours, ça va être injecté dans root
on peut supprimer les commentaires du fichier
on peut enlever le manifest apple
changer le titre
react est très apprécié par les robots de google pour le référencement, les sites en react sont très rapides et sont bien conçus donc très performants
-package.json: eslink à supprimer car bug
src: on supprime tout sauf App.js et Index.js 
et dans App.js on supprime le contenu
et dans index.js: on supprime les webvitals et  import webvitals

Si on a toujours un bug, on quitte le terminal (contrôle c) et on relance (npm start)

npm start 
installations des bons plugins (pour coder un peu plus vite) :simple react snippets, reactjs code snippets et mithril emmet

App est le composant le plus haut de l’application et de App va découler toute l’application

##Installations de bibliothèques##

###Installations extensions###
react developer tools: à télécharger et permet de voir dans la console à la place de console on va dans component et on verra tous les composants de l’application

###Router & Navigation###
On va se créer un router dans App.js
on importe nos bibliothèques
on va créer nos pages, nos composants: dans la page on tape: rsc et entrée
NavLink: est une ancre en react

###On peut mettre du style avec sass###

On met une classe nav activ à laquelle on a injecté du CSS (soulignement bleu quand on clique sur le lien de la barre de navigation)


Les images
Le logo
On va créer un composant logo, il faut ranger les images à différents endroits 
Les images importées depuis la balise img sont accessibles dans "public" donc on met un chemin relatif comme si les images étaient dans le dossier “public”: ./nom de l’image
Sinon pour les background, il faut le vrai chemin (../ pour sortir du dossier etc)

API 


Axios (useEffect, useState) 
npm i axios: pour aller chercher nos données
AXIOS est une technologie qui permet de faire des fetch rapides avec un use effect et une fonction call back, ça rappelle le bout de code si jamais il se passe qqch  dans []
on lui dit, va me chercher l’axios et ramène moi le résultat (qui sera un array de données), on utilise axios au lieu du fetch, (il transfère le fichier json en fichier exploitable sans passer par json)

useEffect, useState sont des composants de react, ce sont des hooks
avec l extension on n’a plus besoin de console log mais on voit dans components nos composants useEffect (=joue moi ce composant dès qu’on le crée)et useState


- Map & Props 



Il faut que cards connaisse countries, donc on va lui donner des props
un composant parent peut donner les données qu’il veut à un composant enfant
mais un enfant ne peut pas les redonner  à son parent

props:faire circuler des données d’un composant à un autre en donnant une clé et une valeur entre accolades

map: va aller chercher le tableau autant de fois qu’il y a de choses dans le tableau

destructuring: modifier les props , en javascript en passant les props de la fonction map entre accolades
const card = ({ country}) =>

On envoie des données dynamiques en javascript entre accolades, le drapeau, la capitale et la population (avec séparateur de milliers: toLocaleString)

Les Filtres (slice, filter, sort)
Comment trier les choses


            <ul className='radio-container'>
                <input type="range" min="1" max="250"/>
            </ul>
            <ul>


Limiter affichage à un certain nombre: méthode slice 
Ici: afficher de 0 à 5 pays , méthode slice à insérer avant la méthode map


            <ul>
            {data.slice(0,5).map((country, index) => (
                <Card key={index} country={country} />
            ))}
            </ul>

Puis avec rangeValue (qu’on définit avant comme constante en démarrant à 36 donc affichage de 36 en 36 pays):
    const [rangeValue, setRangeValue] = useState(36);



            <ul>
            {data.slice(0, rangeValue).map((country, index) => (
                <Card key={index} country={country} />
            ))}
            </ul>

Puis après on n’a plus qu’à changer rangeValue et setRangeValue car react surveille sans arrêt l’évolution des variables car c’est dans l’état du composant 
DONC on met par défaut la valeur de al variable qui sera rangeValue
Donc on lui dit quand tu changes”on change” (créer un évenement react: onchange), tu modifies la valeur de rangeValue
En react, il faut récupérer l’évenement

        <div className='countries'>
            <ul className='radio-container'>
                <input type="range"
                min="1"
                max="250"
                defaultValue={rangeValue}
                onChange={(e)=> setRangeValue(e.target.value)}
                />
            </ul>
            <ul>
            {data.slice(0, 12).map((country, index) => (
                <Card key={index} country={country} />


Base de données avec input
Pour lister en fonction des continents
On va se faire une base de données pour lister les pays: avec une constante en js(tableau de 5 éléments avec une chaine de caractère) et on fait un map
 puis on crée des input (li)de type li pour lister les continents et on les liste avec leur label

                {radios.map((continent) =>
                <li>
                    <input type="radio" id={continent} />
                    <label htmlFor= {continent}>{continent}</label>
                </li>

On ajoute un nom pour ne pouvoir choisir qu’un li
name="continentRadio" />

Il faut se stocker: quand l utilisateur clique sur oceanie, on stocke dans une boite la valeur de Océanie
on crée une variable selectedRadio et rajouter un évenement sur les input

Dans setSelectedRadio, on a réussi à stocker le nom du continent que l’utilisateur veut voir quand il clique sur un drapeau

On va faire un filtre avant le slice et avant le map,  filter()
chaque événement individuellement va être filtré quand on sélectionne un continent

On peut classer  avec sort(a,b)
On peut classer les pays du plus peuplé au moins peuplé

On peut arrêter le filtre
pour revenir à tous les pays du monde et enlever l input de type filter
on doit se faire une petite interface: est ce que selectedRadio





#BASES REACT SUITE#
2eme tuto sur le site de fromscratch
https://fromscratch.podia.com/view/courses/react-de-a-a-z/1260753-cours/3806392-cours-react-2-2


##0:00 - Intro & Installation##
npm i 
npm start

port:3000: localhost:3000

Installer JSON-SERVER : `npm i -g json-server`
Faire tourner le back : `json-server --w src/assets/db.json --port 3004`


//json server permet de ne pas avoir besoin d'un backend

Création de composants: blog

En react, tout est composant

Pour que le style prenne: dans les composants du style: dès qu’on créer une page sass, il faut le relier au fichier principal sass car c’est lui qui est lu dans l’index.js

Point d’entrée de l’application: fichier index.js

13:53 - Style dynamique

Fichier blog.js
const Blog = () => {
    //Variable qui stocke contenu du blog: on va stocker ce qu il y a dans l'input dans la variable, dans le states, et on incrémente l'évenement ds textearea, on change le contenu à l'évenement
    const [content, setContent] = useState("");


    //Fonction handleSubmit: On a un formulaire qui quand il est soumis, ça actionne la fonction handleSubmit
    const handleSubmit =(e)=>{
        e.preventDefault();//empeche le formulaire de recharger la page
    };


    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>


            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Nom" />
                <textarea
                placeholder="Message"
                onChangeCapture ={(e) => setContent(e.target.value)}>
                </textarea>
                <input type="submit" value="Envoyer" />
            </form>
            <ul>




On veut controler que ce qu’il y a dans textarea fasse bien 140 caractères:
On stocke le contenu du message du blog dans un variable blog: ça stocke le contenu de l input dans le states, et on lui dit dans textearea qu’au changement: va récupérer l evenement e et prend le contenu e.target.value

Quand le formulaire est envoyé, on va une fonction handlesubmit qui se déclenche, on évite le rechargement de la page à chaque fois car comportement par défaut du formulaire est de recharger la page

Mettre une logique du message d erreur
Message erreur si moins de 140 caractères

const [error, setError] = useState(false)


    //Fonction handleSubmit: On a un formulaire qui quand il est soumis, ça actionne la fonction handleSubmit
    const handleSubmit =(e)=>{
        e.preventDefault();//empeche le formulaire de recharger la page


        if(content.length<140){//on met une variable erreur sur false de base et si erreur, elle se met sur true si le message est inférieur à 140 caractères
            setError(true);
        }
    };

forme conditionnelle du message p avec les accolades en react, si erreur = à true alors ça affiche le message

{error && <p>Veuillez écrire un minimum de 140 caractères</p>}

Mettre une mise en page conditionnelle
Mettre une bordure rouge
balise style en react: style={{}}

On met une condition ternaire: si erreur est true tu fais la bordure rouge, si c est faux ça revient bleu

<textarea
                style={{ border: error ? "1px solid red" : "1px solid #61dafb"}}

##23:48 - Read (get)##
On commence par aller chercher les données dans une base de données et à les afficher c est juste axios.get v ame chercher les données

On va installer json serveur
dans une nouvelle console pour ne pas ferme npm start (avec le  +de la console)
npm i -g json-server

npm i json-server
 et on regarde si on l’a bien dans les dépendances de package.json

 puis on va chercher un script qui est un message: 
json-server --w src/assets/db.json --port 3004
json serveur je t’appelle: surveille le fichier .json que je te dis: assets
assets est une base de données comme un objet json
c est différent d’un objet JS car après les clés des éléments c’est entre guillemets et comme un objet Js c ‘est entre {}

On peut se créer des bases de données dedans.
Pour faire tourner cette simulation de back il faut s ouvrir une nouvelle console, comme on l’a ouvert et dans le port 3004
mais pas directement dans la console! mais on se crée un script server dans package.json

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server --w rc/assets/db.json --port 3004"
  },

et on va taper dans la console: npm run server

UseEffect
On va encadrer le axios du get par un useeffect (quand le composant est en train d etre appelé, je veux que tu joues ce qu il y a a à l’intérieur)
il y a une fonction getData qui va nous chercher les données, 

et un useEffect qui va chercher les données qu’on veut

const getData = () =>{
        axios
        .get("http://localhost:3004/articles")
        .then((res)=> console.log(res));
    };
    useEffect(() =>getData(),[]);


puis on déclare le contenu dans une variable
on aura les données du blog [] pour dire les données qu’on attend

const [blogData, setBlogData] = useState([]);
const getData = () =>{
        axios
        .get("http://localhost:3004/articles")
        .then((res)=> setBlogData(res.data));
    };

On fait un map pour afficher les données
on va maper blogData
 {blogData.map((article)=>(


                ))}
chaque evenement individuellement ça va etre un article

##37:07 - Props (composant Article)##
On va créer un composant article

Dans le fichier blog:
il faut passer les données de chaque tour de boucle dans le composant article car c’est lui qui a la logique de article
map enumeration de chaque tour du boucle du tableau qu on a appelé article

{blogData.map((article)=>(
                    <Article key ={article.id} article={article}/>
                ))}

Dans le fichier article
on crée une en tête card header qui va aller chercher l auteur et la date en javascript donc {}
puis on va avoir un paragraphe avec le contenu de la article à aller chercher , tjs en JS
et deux boutons pour ajouter et supprimer

const Article = ({article}) => {
    return (
       <div className="article">
        <div className="card-header">
            <h3>{article.author}</h3>
            <em>Posté le {article.date}</em>
        </div>
        <p>{article.content}</p>
        <div className="btn-container">
            <button>Edit</button>
            <button>Supprimer</button>
        </div>
       </div>
    );
};
 il faudra trier avec un sort car on a les articles les plus anciens en haut

formatage de la date
on va passer la date en parametre 
const dateFormater = (date) => {
    return date;
}

et on va traiter cette date dans le card header ‘time stamp)
 <em>Posté le {dateFormater(article.date)}</em>

puis on lui demande de passer la date en français sur un autre format:
const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR");
};

 on peut lui dire cmt on veut les parametres date:
année je veux en numérique
jour en numérique…
const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
        second:"numeric"
    })
    return newDate;
};

trier les dates
on va trier du plus récent au plus ancient donc b.date - a.date car ce sont des objets date
{blogData
                    .sort((a, b) => b.date - a.date)


##47:55 - Create (post)##
axios.post

on va appeler les données axios.post:
-adresse url à aller chercher 
-et ensuite l’objet des données qu’on veut lui passer: auteur, contenu et la date

quand on soumet le formulaire on va faire un axios.post

 }else{
            axios.post("http.//localhost:3003/articles", {
                author: "TEST",
                content,
                date: Date.now()
            })


Vider les input
ajouter des constantes setAuthor et setContent
}else{
            axios.post("http://localhost:3004/articles", {
                author,
                content,
                date: Date.now()
            })
            setError(false);
            setAuthor("");
            setContent("");

on va modifier la valeur des input dans textarea avec value author et content
<form onSubmit={(e) => handleSubmit(e)}>
                <input type="text"
                placeholder="Nom"
                onChange={(e)=> setAuthor(e.target.value)}
                value={author}
                />
                <textarea
                style={{ border: error ? "1px solid red" : "1px solid #61dafb"}}
                placeholder="Message"
                onChangeCapture={(e) => setContent(e.target.value)}
                value={content}
                ></textarea>

Ajout de l article dans la page
On va rajouter getData pour évoluer en live le state de getData
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


##1:03:27 - Update##
Dans article:

 On crée une constante qui est un boolean:isEditing donc de base on n’est pas en train d’éditer mais si on clique sur le bouton, on va éditer
donc on lui dit à notre bouton onclick: tu vas set IsEditing sur true si on clique

Rendu conditionnel
si IsEditing est sur true au lieu d’afficher un paragraphe, tu vas afficher un rendu conditionnel
 {
            isEditing ? <textarea></textarea> : <p>{article.content}</p>
        }
ternaire si IsEditing est true alors tu me mets le textarea (bloc vide) sinon le contenu du paragraphe
sa valeur par défaut sera article.content donc de base on aura ça, mais si on clique, on aura un autre comportement
 {
            isEditing ? <textarea defaultValue={article.content}></textarea> : <p>{article.content}</p>
        }


mais si on est en train d’éditer un texte, il faut pouvoir le garder: pour update

bouton valider et éditer
variable isEditing du contenu édité: on clique sur le bouton édité pour le contenu édité, puis le bouton edit va se transformer en bouton valider.

donc on créer une variable EditContent dans une ternaire
et on veut que le bouton edit devienne un bouton validé dc on va conditionner cela
quand on clique sur bouton validé, la variable setIsEditing repasse sur false
puis quand c’est validé, le setIsEditing repasse sur true

<div className="btn-container">
            {isEditing ? (
                <button onClick={() => setIsEditing(false)}> Valider</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}



gestion de l édition

const handleEdit pour gérer l’édition
tu vas mettre setEditing sur flase mais pas que
onclick tu joues handleEdit, et handleEdit permet de retourner sur false et de retourner sur la base de données mettre à jour
const handleEdit = () => {
        setIsEditing(false);
    };

{isEditing ? (
                <button onClick={() => handleEdit()}>Valider</button>
            )

il faut pointer l’article avec son id et modifier:

modification article avec onChange
{
            isEditing ? <textarea defaultValue={article.content} onChange={(e) => setEditContent (e.target.value)}></textarea> : <p>{article.content}</p>
        }

-On crée un objet de ce qu’on veut dans l’article
const handleEdit = () => {
        const data = {
            author: article.author,
            content: editContent ? editContent : article.content,
            date:article.date,
            updatedDate:Date.now(),
        }
pour le contenu, onfait une ternaire: s il y a une modif du contenu alors met cette modif du contenu sinon met l’article

et si tu veux faire un update date, il faut prendre le lien suivant:
en faisant un axios.put

axios.put
 axios.put("http://localhost:3004/articles/"+ article.id)

tu fais un put de l’article sélectionné par son id et son lien url, et on lui passe les données qu’on veut:
puis on fait un then qui repasse sur false isEditing
axios.put("http://localhost:3004/articles/"+ article.id, data).then(() => {
            setIsEditing(false);
        });


conclusion: si isEditing est sur true: alors propose le bouton valider
une fois que isEditing est sur true  c est validé qui s’affiche comme bouton et c ‘est handleedit qui se met en place et c’est l objet crée qui est envoyé

pour remettre l’article si ma personne met editer mais qu elle ne change rien et ne valide rien:
pour le moment, ça remet l’article de base
ça modifie le texte et ça modifie aussi la date updatedDate et plus Date dans la BDD
 content: editContent ? editContent : article.content,


on fait du NoSQL car on a des objets javascript (json = javascript object notation) et on peut créer des bases de données sans aucune règle, pour faire des BDD très libres, moins cloisonné et réglementé que SQL, donc plus besoin de dire qu’il existe une boite updatedDate, ça se crée seul

parametre HTML AUTOFOCUS
si je clique on est focus dessus car quand sur textearea on ne se rend pas compte si on tape dessus  ou pas

 autoFocus

-default value
se prémunir de ne pas afficher la premeire version si on a fait plusieurs versions
<textarea
            defaultValue={editContent ? editContent : article.content}

-style changer couleur de fond pour montrer qu on est focus sur textarea style conditionnele
si la personne est en train d editer
si isediting sur true on met une couleur sinon background de base
 <div className="article" style={{background: isEditing ? "#f3feff" : "white" }}>

On a fait des ternaires d’affichage

##1:23:29 - Delete##

bouton suppression article
au click: confirmation de suppression avec demande de oui ou non
c est comme un alerte, et si oui, prend en charge la suppression
const handleDelete = () =>{
        axios.delete("http://localhost:3004/articles/"+ article.id)
    };

pour que ça recharge la page 
const handleDelete = () =>{
        axios.delete("http://localhost:3004/articles/"+ article.id);
        window.location.reload();
    };
 pour nous supprimer visuellement l article, sinon on le voit encore à l’écran

On a créée un CRUD avec un faux back
On ne fait pas de CRUD en react normalement mais il y a tout dans ce tuto avec ternaire d affichage, stocker des variables dans le states et se créer des fonctions


