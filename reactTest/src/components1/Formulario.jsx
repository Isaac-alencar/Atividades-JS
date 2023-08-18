import { useState } from "react";
import './components.css'
import imgsCamp from "../ImgsCamp";

function SelectChamp(){
    const [text , setText] = useState('')
    const [edit , setEdit] = useState(false)
    const word = e.target.value
    const urlImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${text}_0.jpg`
    const campeoes_lol = [
        "Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe",
        "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille",
        "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko",
        "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank",
        "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia",
        "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista",
        "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix",
        "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra",
        "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune",
        "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne",
        "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana",
        "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renekton", "Rengar", "Riven", "Rumble",
        "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana",
        "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra",
        "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle",
        "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar",
        "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah",
        "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean",
        "Zoe", "Zyra"
    ]
    
    function sendText(word){
        if(e.key === 'Enter'){
            if(campeoes_lol.includes(word)){
            e.preventDefault() 
            setText(word)
            console.log(word)         
            
            }
        }
    }
    
    function validation(e){
        
        for(let i = 0 ; i < 12;i++){
            if(campeoes_lol.includes(word[i]) && !isNaN(campeoes_lol.includes(word[i])) ){
                return
            }
            console.log("BLX");
        }
    }
    function validationEdit(){
        setEdit(true)
    }
    
    return (
        <>
        <section className="SelectChamp">
            <label>Escolha o Campeão</label>
            <input type="text" 
            placeholder= "Primeiro e Segundo nome com letra Maíscula ( Lee Sin )."
            onChange={validation}
            readOnly={!edit}
            onDoubleClick={validationEdit}
            onKeyDown={sendText}
            />
        </section>
        <section className="champSelected">
            {urlImg ? 
            (
                <>
            <span>
                {sendText ? text : null}
            </span>
            <div>
                <img src={urlImg} alt={text} />
            </div>
                </>
            )  : null}
            
        </section>
        </>
    )
}

export default function Formulario(){
    return (
        <section className="Formulario">
            <form action="">
                <SelectChamp/>
            </form>
        </section>
    )
}