const champRoles = [{
    category: "assassins",
    name: "akali",
    imgSrc: "images-videos/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.avif",
    description: "The Rogue Assassin"
}, {
    category: "fighters", name: "yasuo", imgSrc: "images-videos/yasuo.avif", description: "The Unforgiven"
}, {
    category: "mages",
    name: "lux",
    imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?auto=format&fit=fill&q=80&w=1152",
    description: "The Lady of Luminosity"
}, {
    category: "marksmen",
    name: "jinx",
    imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?auto=format&fit=fill&q=80&w=1152",
    description: "The Loose Cannon"
}, {
    category: "supports",
    name: "thresh",
    imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?auto=format&fit=fill&q=80&w=1152",
    description: "The Chain Warden"
}, {
    category: "tanks",
    name: "leona",
    imgSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=1152",
    description: "The Radiant Dawn"
}];


document.addEventListener("DOMContentLoaded", () => {
    const categoryElements = document.querySelectorAll(".champ-role-select li");
    const aside = document.querySelector("aside");

    const updateChampion = (champion) => {
        aside.innerHTML = `
          <div>
            <img src="${champion.imgSrc}" alt="${champion.name}" style="width: 35rem; height: auto">
          </div>
          <div class="champion-description">
            <h3>${champion.name.toUpperCase()}</h3>
            <p>${champion.description}</p>
          </div>
        `;
    };

    categoryElements.forEach((element) => {
        element.addEventListener("click", () => {
            const categoryId = element.id;
            const selectedChampion = champRoles.find(champ => champ.category === categoryId);

            if (selectedChampion) {
                updateChampion(selectedChampion);
            }
        });
    });
});
//choose-your-champion script

const gameModes = [
    {
        id: "summonerrift",
        name: "THE MOST POPULAR GAME MODE",
        videoSrc: "images-videos/bbc27473157462adacf0de441a8796268eb2d0ac.mp4",
        description: "Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours."
    },
    {
        id: "aram",
        name: "ALL RANDOM ALL MID",
        videoSrc: "images-videos/aram.mp4",
        description: "Fight it out in a chaotic one-lane battle where every champion is randomly assigned!"
    },
    {
        id: "teamfighttactics",
        name: "TEAMFIGHT TACTICS",
        videoSrc: "images-videos/tftvid.mp4",
        description: "Build your team, strategize, and outlast your opponents in this turn-based strategy game."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const gameModeElements = document.querySelectorAll("#gamemodes li");
    const aside = document.querySelector("aside.mwtp-video");

    const updateGameMode = (gameMode) => {
        aside.innerHTML = `
            <div class="sf" style="margin: 3rem; display: block">
                <div class="rounded-wrapper" style="width: auto; height: 100%">
                    <video src="${gameMode.videoSrc}" autoplay muted loop style="width: 30rem; height: 30rem"></video>
                </div>
            </div>
            <div class="gamemode-description" style="text-align: center; margin: 5rem">
                <h3>${gameMode.name}</h3>
                <p>${gameMode.description}</p>
            </div>
        `;
    };

    gameModeElements.forEach((element) => {
        element.addEventListener("click", () => {
            const gameModeId = element.id;
            const selectedGameMode = gameModes.find(mode => mode.id === gameModeId);

            if (selectedGameMode) {
                updateGameMode(selectedGameMode);
            }
        });
    });
});

//https://chatgpt.com/share/6776a504-38bc-800e-bfac-b5f824cb1e42