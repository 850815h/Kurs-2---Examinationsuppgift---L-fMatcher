class Lover extends Domer {

    _alienManPictures = ["/img/AlienMan01.jpg", "/img/AlienMan02.jpg", "/img/AlienMan03.jpg", "/img/AlienMan04.jpg", "/img/AlienMan05.jpg"];
    _alienWomanPictures = ["/img/AlienWomen01.jpg", "/img/AlienWomen02.jpg", "/img/AlienWomen03.jpg", "/img/AlienWomen04.jpg", "/img/AlienWomen05.jpg"];
    _fantasyManPictures = ["/img/FantasyMan01.jpg"];
    _fantasyWomanPictures = ["/img/FantasyWoman01.jpg", "/img/FantasyWoman02.jpg", "/img/FantasyWoman03.jpg", "/img/FantasyWoman04.jpg"];
    _humanManPictures = ["/img/HumanMan01.jpg", "/img/HumanMan02.jpg", "/img/HumanMan03.jpg"];
    _humanWomanPictures = ["/img/HumanWoman01.jpg", "/img/HumanWoman02.jpg", "/img/HumanWoman03.jpg"];
    _martianManPictures = ["/img/MartianMan01.jpg", "/img/MartianMan02.jpg"];
    _martianWomanPictures = ["/img/MartianWoman01.jpg", "/img/MartianWoman02.jpg", "/img/MartianWoman03.jpg", "/img/MartianWoman04.jpg"];
    _unknownManPictures = ["/img/UnknownMan01.jpg"];
    _unknownWomanPictures = ["/img/MartianMan01.jpg"];

    _maleNames = ["Mantas-a", "Tobbe-n", "Hassanito", "Geten", "Stalle", "Hänkis", "Alion", "Haffis", "Cleor", "Rorke", "Kungen", "Tobito"];
    _femaleNames = ["Skata", "Shoo-Cur-ni-a", "Enoria", "Taminu", "Varteru", "Sakandra", "Sekorita", "Johaaa", "Queene", "Helia"];
    _unknownNames = ["9/4+1+0k", ".FJ3+8+231öl,<o8?)84", "<3u9gh39", "å29<07494930fj"];
    _loverQuotes = ["I love you, not only for what you are, but for what I am when I am with you.",
        "Love is when the other person’s happiness is more important than your own.",
        "Life is the flower for which love is the honey.",
        "To love and be loved is to feel the sun from both sides.",
        "Love’s greatest gift is its ability to make everything it touches sacred",
        "Love is the crowning grace of humanity, the holiest right of the soul, the golden link which binds us.",
        "It was love at first sight, at last sight, at ever and ever sight",
        "You can’t blame gravity for falling in love.",
        "We are born of love; Love is our mother.",
        "Love isn’t something you find. Love is something that finds you."];

    _loverPictures = ["/img/hearts2.jpg"];

    _selectedLoverBreed;
    _availableLoverBreed = ["Alien", "Fantasy", "Human", "Martian", "Unknown"];
    _selectedLoverGender;
    _availableLoverGender = ["Male", "Female", "Unknown"];

    _breedMales = [this._alienManPictures, this._fantasyManPictures, this._humanManPictures, this._martianManPictures, this._unknownManPictures];
    _breedFemales = [this._alienWomanPictures, this._fantasyWomanPictures, this._humanWomanPictures, this._martianWomanPictures, this._unknownWomanPictures];
    _breedUnknown = [this._unknownManPictures, this._unknownWomanPictures];

    constructor(breed, gender) {
        super();
        this._selectedLoverBreed = breed;
        this._selectedLoverGender = gender;
    }

    render(html) {
        return html`
            <section class="whatToShowContainer">

                <img src="${this.shufflePictures()}"><br>
                <h1>${`Name: ${this.shuffleNames()}`}</h1><br>
                <h1>${`Age: ${this.shuffleAges()}`}</h1><br>
                <h1>${`Quote: ${this.shuffleQuoetes()}`}</h1>

            </section>
        `;
    }


    shufflePictures() {

        switch (this._selectedLoverGender) {

            case "Male":
                for (let i = 0; i < this._availableLoverBreed.length; i++) {
                    if (this._selectedLoverBreed == this._availableLoverBreed[i]) {

                        let randomNumber = Math.floor(Math.random() * this._breedMales[i].length);
                        return this._breedMales[i][randomNumber];
                    }
                }
                break;

            case "Female":
                for (let i = 0; i < this._availableLoverBreed.length; i++) {
                    if (this._selectedLoverBreed == this._availableLoverBreed[i]) {

                        let randomNumber = Math.floor(Math.random() * this._breedFemales[i].length);
                        return this._breedFemales[i][randomNumber];
                    }
                }
                break;

            case "Unknown":
                for (let i = 0; i < this._availableLoverBreed.length; i++) {
                    if (this._selectedLoverBreed == this._availableLoverBreed[i]) {

                        let randomNumber = Math.floor(Math.random() * this._breedUnknown.length);
                        return this._breedUnknown[randomNumber][0];
                    }
                }
                break;

            default:
                return this._loverPictures;
                break;
        }
    }

    shuffleNames() {
        let randomFemaleNameNumber = Math.floor(Math.random() * this._femaleNames.length);
        let randomMaleNameNumber = Math.floor(Math.random() * this._maleNames.length);
        let randomUnknownNameNumber = Math.floor(Math.random() * this._unknownNames.length);

        switch (this._selectedLoverGender) {
            case "Male":
                return this._maleNames[randomMaleNameNumber];
                break;
            case "Female":
                return this._femaleNames[randomFemaleNameNumber];
                break;
            case "Unknown":
                return this._unknownNames[randomUnknownNameNumber];
                break;
        }
    }

    shuffleAges() {
        let randomNumber = Math.floor(Math.random() * 110) + 18;
        let _loverAges;
        return randomNumber;
    }

    shuffleQuoetes() {
        let randomNumber = Math.floor(Math.random() * this._loverQuotes.length);
        return this._loverQuotes[randomNumber];
    }
}