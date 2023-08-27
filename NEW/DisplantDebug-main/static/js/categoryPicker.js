let mainCategories = [
    {
        name: "Valorant",
        image: "images/phoenix_valorant.gif"
    },
    {
        name: "Valorant",
        image: "images/phoenix_valorant.gif"
    },
    {
        name: "Valorant",
        image: "images/ash_apex.gif"
    },
    {
        name: "Valorant",
        image: "images/R6S_Thum.gif"
    },
    {
        name: "Valorant",
        image: "images/phoenix_valorant.gif"
    },
    {
        name: "Valorant",
        image: "images/Destiny2_ice.gif"
    },
    {
        name: "Valorant",
        image: "images/phoenix_valorant.gif"
    },
    {
        name: "Valorant",
        image: "images/phoenix_valorant.gif"
    },
    {
        name: "Valorant",
        image: "images/phoenix_valorant.gif"
    },
    {
        name: "Valorant",
        image: "images/phoenix_valorant.gif"
    },
    {
        name: "Valorant",
        image: "images/minecraft.gif"
    },
    {
        name: "Valorant",
        image: "images/dead-by-daylight.gif"
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
        perPage: 3,
    } );
    splide.mount();
} );