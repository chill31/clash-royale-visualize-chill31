const mainPopupElement = document.querySelector(".popup-wrapper");
const closeIcon = document.querySelector(".info__close");

const infoImage = document.querySelector(".info__image");
const infoTitle = document.querySelector(".info__title");
const infoBrief = document.querySelector(".info__brief");
const infoRarity = document.querySelector(".stat__rarity");
const infoType = document.querySelector(".stat__type");
const infoElixir = document.querySelector(".stat__elixir");
const infoArena = document.querySelector(".stat__arena");

const paths = {
  cards: 'https://royaleapi.github.io/cr-api-data/json/cards.json',
}

const cards = [

]

fetch(paths.cards).then(res => res.json()).then(data => {

  data.forEach((card, index) => {

    let formattedPathForImage = card.name.toLowerCase().replaceAll('.', '').replaceAll(' ', '_');

    switch(formattedPathForImage) {

      case 'skeleton_army':
        formattedPathForImage = 'skeleton_horde';
        break;

      case 'elite_barbarians':
        formattedPathForImage = 'angry_barbarian';
        break;

      case 'dart_goblin':
        formattedPathForImage = 'blowdart_goblin';
        break;

      case 'minions':
        formattedPathForImage = 'minion';
        break;

      case 'balloon':
        formattedPathForImage = 'chr_balloon';
        break;

      case 'golem':
        formattedPathForImage = 'chr_golem';
        break;

      case 'spear_goblins':
        formattedPathForImage = 'goblin_archer';
        break;

      case 'guards':
        formattedPathForImage = 'skeleton_warriors';
        break;

      case 'ice_spirit':
        formattedPathForImage = 'snow_spirits';
        break;

      case 'fire_spirit':
        formattedPathForImage = 'fire_spirits';
        break;

      case 'sparky':
        formattedPathForImage = 'zapMachine';
        break;

      case 'lumberjack':
        formattedPathForImage = 'rage_barbarian';
        break;

      case 'night_witch':
        formattedPathForImage = 'nightwitch';
        break;

      case 'skeleton_barrel':
        formattedPathForImage = 'skeleton_balloon';
        break;

      case 'wall_breakers':
        formattedPathForImage = 'wallbreaker';
        break;

      case 'royal_ghost':
        formattedPathForImage = 'ghost';
        break;

      case 'royal_hogs':
        formattedPathForImage = 'royal_hog';
        break;

      case 'mighty_miner':
        formattedPathForImage = 'mightyminer';
        break;

      case 'skeleton_king':
        formattedPathForImage = 'skeletonking';
        break;

      case 'super_magic_archer':
        formattedPathForImage = 'supermagicarcher';
        break;

      case 'archer_queen':
        formattedPathForImage = 'archerqueen';
        break;

      case 'santa_hog_rider':
        formattedPathForImage = 'superhogrider';
        break;

      case 'golden_knight':
        formattedPathForImage = 'goldenknight';
        break;

      case 'super_ice_golem':
        formattedPathForImage = 'supericegolem';
        break;

      case 'skeleton_dragons':
        formattedPathForImage = 'skeletondragon';
        break;

      case 'mother_witch':
        formattedPathForImage = 'motherwitch';
        break;

      case 'electro_spirit':
        formattedPathForImage = 'electrospirit';
        break;

      case 'electro_giant':
        formattedPathForImage = 'electrogiant';
        break;

      case 'cannon':
        formattedPathForImage = 'chaos_cannon';
        break;

      case 'goblin_hut':
        formattedPathForImage = 'fire_furnace';
        break;

      case 'mortar':
        formattedPathForImage = 'building_mortar';
        break;

      case 'inferno_tower':
        formattedPathForImage = 'building_inferno';
        break;

      case 'tesla':
        formattedPathForImage = 'building_tesla';
        break;

      case 'elixir_collector':
        formattedPathForImage = 'building_' + formattedPathForImage;
        break;

      case 'x-bow':
        formattedPathForImage = 'building_xbow';
        break;

      case 'furnace':
        formattedPathForImage = 'firespirit_hut';
        break;

      case 'goblin_drill':
        formattedPathForImage = 'goblindrill';
        break;

      case 'fireball':
        formattedPathForImage = 'fire_' + formattedPathForImage;
        break;
      
      case 'arrows':
        formattedPathForImage = 'order_volley';
        break;

      case 'clone':
        formattedPathForImage = 'copy';
        break;

      case 'barbarian_barrel':
        formattedPathForImage = 'barb_barrel';
        break;

      case 'heal_spirit':
        formattedPathForImage = 'healspirit';
        break;
      
      case 'giant_snowball':
        formattedPathForImage = 'snowball';
        break;

      default:
        formattedPathForImage = formattedPathForImage;
        break;

    }

    cards.push({
      name: card.name,
      cardType: card.type,
      description: card.description,
      rarity: card.rarity,
      index: index,
      elixir: card.elixir,
      arena: card.arena,
      image: `https://cdn.statsroyale.com/images/cards/full/${formattedPathForImage}.png`
    });

  });

  const cardsContainer = document.querySelector(".cards-container");
  cards.forEach((card) => {
  
    const createdCard = document.createElement("div");
    createdCard.classList.add("card");
    createdCard.classList.add(`index-${card.index}`)
  
    createdCard.innerHTML = `<img class="card__image" src="${card.image}" alt="${card.name}">
  <h2 class="card__title">${card.name}</h2>
  `;
  
    cardsContainer.appendChild(createdCard);
  
  });

  const cardElements = document.querySelectorAll(".card");
  cardElements.forEach((el) => {

    el.addEventListener("click", () => {

      showMainPopup();

      const index = Number(el.classList[1].replace("index-", ""));

      infoImage.src = cards[index].image;
      infoTitle.textContent = cards[index].name;
      infoBrief.textContent = cards[index].description;
      infoElixir.textContent = cards[index].elixir;
      infoRarity.textContent = cards[index].rarity;
      infoType.textContent = cards[index].cardType;
      infoArena.textContent = cards[index].arena;

    });

  });

});

mainPopupElement.addEventListener("click", (e) => {
  if(e.target !== mainPopupElement) return;
  hideMainPopup();
});

addEventListener("keydown", (e) => {
  if(e.key === 'Escape') hideMainPopup();
});

closeIcon.addEventListener("click", () => {
  hideMainPopup();
});

/* functions */

function showMainPopup() {
  mainPopupElement.classList.add("visible");
}

function hideMainPopup() {
  mainPopupElement.classList.remove("visible");
}