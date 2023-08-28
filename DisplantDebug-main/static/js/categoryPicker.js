let mainCategories = [
    {
        name: "Valorant",
        image: "images/phoenix_valorant.gif"
    },
    {
        name: "Rainbow Six",
        image: "images/R6S_Thum.gif"
    },
    {
        name: "Warzone",
        image: "images/warzone_emote.gif"
    },
    {
        name: "Overwatch 2",
        image: "images/overwatch-genji.gif"
    },
    {
        name: "Apex Legends",
        image: "images/octane_run.gif"
    },
    {
        name: "Destiny 2",
        image: "images/Destiny2_ice.gif"
    },
    {
        name: "League of Legends",
        image: "images/akali_paint.gif"
    },
    {
        name: "Rust ",
        image: "images/rust-boy.gif"
    },
    {
        name: "Genshin Impact",
        image: "images/genshin_impact.gif"
    },
    {
        name: "World of Warcraft",
        image: "images/worldof_warcraft.gif"
    },
    {
        name: "Minecraft",
        image: "images/minecraft.gif"
    },
    {
        name: "Dead By Daylight",
        image: "images/dead-by-daylight.gif"
    },
    {
        name: "PUBG",
        image: "images/pub_g.gif"
    },
    {
        name: "Among Us",
        image: "images/amongus-kill.gif"
    },
    {
        name: "Elden Ring",
        image: "images/elden_ring.gif"
    },
    {
        name: "VRChat",
        image: "images/vrchat.gif"
    },
    {
        name: "Super Smash",
        image: "images/supersmash.gif"
    },
    {
        name: "CS:GO",
        image: "images/csgo_spin.gif"
    },
    {
        name: "Fall Guys",
        image: "images/fallguys_tw.gif"
    }

    
];
class GameCategoryCard {
    constructor({name, image}) {
        this.element = document.createElement("li");
        this.element.classList.add("gameCategoryCard");
        this.element.classList.add("splide__slide");
        this.element.innerHTML = `
          <div>
            <a></a>
            <h3></h3>
            <img src="" alt="" />
          </div>
        `;
        this.element.querySelector("h3").innerText = name;
        this.element.querySelector("img").src = image;
        this.element.querySelector("a").addEventListener("click", function (e) {
            e.preventDefault();
        });
    };

    remove() {
        this.element.remove();
    }

    render(parent) {
        parent.append(this.element);
    }
}
let mainCategoryCards = mainCategories.map(data => new GameCategoryCard(data));
const scroller = document.querySelector(".categoryBrowserScroller");


const leftButton = document.querySelector(".categoryBrowser .scrollLeft");
const rightButton = document.querySelector(".categoryBrowser .scrollRight");

function renderCards(moveOffset = 0) {
    mainCategoryCards.forEach(card => card.remove());
    const windowSize = window.innerWidth;
    let visibleCardCount;
    if (windowSize > 1500) {
        visibleCardCount = 5;
    } else if (windowSize > 1024) {
        visibleCardCount = 5;
    } else {
        visibleCardCount = 5;
    }
    mainCategoryCards.forEach(card => {
        card.render(scroller);
    });
}

renderCards();
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.categoryBrowserWindow', {
        type: "loop",
        perPage: 7,
    } );
    splide.mount();
} );
