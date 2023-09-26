import "./components.css";
import { ApiLolContext } from "../contexts/apiLolContext";
import { useEffect, useContext, useState } from "react";

export default function ChampLore({ searchTerm, format }) {
  const LOLChampionsList = useContext(ApiLolContext);
  const [dataLore, setDataLore] = useState(null);

  const filteredChamps = LOLChampionsList.filter((item) =>
    format(item.id).includes(searchTerm)
  );

  return (
    <React.Fragment>
      <div className="ChampSelection">
        <FinishDataChamp champs={filteredChamps} />
      </div>
      {dataLore && <SelectedChampLore championData={dataLore} />}
    </React.Fragment>
  );
}

const FinishDataChamp = ({ champs }) => {
  const baseAvatarUrl = `https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion`;

  const handleClick = (championInfo = setDataLore(championInfo));

  return (
    <React.Fragment>
      {champs &&
        champs.map(({ id, title, name, blurb, image }) => {
          return (
            <div
              key={id}
              className="Champion-card"
              onClick={() =>
                handleClick({
                  id,
                  title,
                  name,
                  blurb,
                })
              }
            >
              <div>
                <img
                  src={`${baseAvatarUrl}/${image.full}`}
                  alt={id}
                  // style={{ cursor: "pointer" }} mover para o CSS
                  loading="lazy"
                ></img>
                <h2>{name}</h2>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
};

const SelectedChampLore = ({ championData }) => {
  const { id, title, name, lore } = championData;

  const baseLoLSiteURl = "https://universe.leagueoflegends.com/pt_BR/champion";

  if (!championData) return null;

  return (
    <div className="SelectedChamp">
      <span className="champDetails">
        <h2>{title[0].toUpperCase() + title.slice(1)}</h2>
        <img src={preloadedImageUrl} alt={name} loading="lazy" />
        <h2>{name}</h2>
      </span>
      <span className="lore">
        <h2>{lore}</h2>
        <button>
          <a target="_blank" href={`${baseLoLSiteURl}/${id}/`}>
            Continuação
          </a>
        </button>
      </span>
    </div>
  );
};
