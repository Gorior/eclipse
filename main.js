let aliens = [
    // Base
    {
        nameFront: 'Eridani Empire',
        nameFlip: 'Terran Directorate'
    },
    {
        nameFront: 'Hydran Progress',
        nameFlip: 'Terran Federation'
    },
    {
        nameFront: 'Planta',
        nameFlip: 'Terran Union'
    },
    {
        nameFront: 'Descendants of Draco',
        nameFlip: 'Terran Republic'
    },
    {
        nameFront: 'Mechanema',
        nameFlip: 'Terran Conglomerate'
    },
    {
        nameFront: 'Orion Hegemony',
        nameFlip: 'Terran Alliance'
    },
    // Expansion
    {
        nameFront: 'The Exiles',
        nameFlip: 'Wardens of Magellan'
    },
    {
        nameFront: 'Rho Indi Syndicate',
        nameFlip: 'Keepers of Magellan'
    },
    {
        nameFront: 'Enlightened of Lyra',
        nameFlip: 'Sentinels of Magellan'
	},
	// Expansion
    {
        nameFront: 'Terran Separatists',
        nameFlip: 'Guardians of Magellan'
    },
    // Expansion
    {
        nameFront: 'Pyxis Unity',
        nameFlip: 'Octantis Autonomy'
    },
    {
        nameFront: 'Shapers of Dorado',
        nameFlip: 'Octantis Vanguard'
    }
];


const randomDiapazone = function(from, to) {
	let rand = from + Math.random() * (to - from);

	return Math.round(rand);
};

const randomCard = function(array) {
    let lastNumber = array.length - 1;

	return array[randomDiapazone(0, lastNumber)];
}

let cardFront = document.querySelector('#displayRaceFront');
let cardFlip = document.querySelector('#displayRaceFlip');

const toGenerate = function() {
    let card = randomCard(aliens);

    if (aliens.length) {
        cardFront.innerHTML = card.nameFront;
        cardFlip.innerHTML = card.nameFlip;
    
        aliens.splice(aliens.indexOf(card), 1);
    } else {
        cardFront.innerHTML = 'no cards';
        cardFlip.innerHTML = 'no cards';
    }
}


let btnGenerate = document.querySelector("#btnGenerate");
btnGenerate.addEventListener("click", toGenerate);