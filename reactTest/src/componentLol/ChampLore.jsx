import './components.css';
import { ApiLolContext } from '../contexts/apiLolContext';
import { useEffect,useContext, useState } from 'react';


export default function ChampLore({searchTerm , format}){
    const apiLolData = useContext(ApiLolContext);
    const [dataLore , setDataLore] = useState(null);
    
    function SelectedChampLore(props){
        const {id , title , name , lore} = props;
        //let url = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;
        const [preloadedImageUrl, setPreloadedImageUrl] = useState(null);

        useEffect(() => {
            if (dataLore) {
                const image = new Image();
                const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;
                image.src = imageUrl;
                setPreloadedImageUrl(imageUrl); 
            }
        }, [dataLore]);
        
        if(props){
                return (
                <div className='SelectedChamp'>
                   <span className='champDetails'>
                       <h2>{title[0].toUpperCase()+title.slice(1)}</h2>
                        <img 
                            src={preloadedImageUrl} 
                            alt={name} 
                            loading='lazy'
                        />
                        <h2>{name}</h2>
                   </span>
                   <span className='lore'>
                        <h2>
                            {lore}
                        </h2>
                        <button>
                            <a target='_blank' href={`https://universe.leagueoflegends.com/pt_BR/champion/${id}/`}
                            >Continuação</a>
                        </button>
                   </span>
                </div>
                );
      }
    }

    function finishDataChamp() {
        if( apiLolData && searchTerm){
            const resultFilter = apiLolData.filter((item) => format(item.id).includes(searchTerm))
            return resultFilter.map((item , i) => {
                let url = `https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${item.image.full}`
                return (
                    <span className='Champion-card' 
                    onClick={() =>
                    setDataLore({id :item.id , title : item.title , name : item.name , lore : item.blurb})}>
                        <div key={i}>
                            <img src= {url} alt= {item.id}  
                            style={{cursor : 'pointer'}}
                            loading='lazy'>
                            </img>
                            <h2>{item.name}</h2>
                        </div>
                    </span>
                )
            }) 
        }
        return null;
   }
    return(
        <>
        <span className='ChampSelection'>
            {finishDataChamp()}
        </span>
            {dataLore && <SelectedChampLore {...dataLore}/>}
        </>
)
}
