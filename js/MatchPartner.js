class MatchPartner extends Domer {

    _REGISTRATION_NEEDED = 0;
    _REGISTRATION_COMPLETE = 1;
    _state = this._REGISTRATION_NEEDED;
    _registrationFormFilled = false;

    _costumerInformation = ``;
    _messageWindow;
    _loverBreed;
    _loverGender;

    _lovers = [];

    constructor(start) {
        super();

        this._start = start;
    }

    render(html) {
        return html`
            <section class="whatToShowContainer">
            
                ${this._lovers}
                ${this.whatToShow()}
                
            </section>
        `;
    }

    changeState(state) {
        this._state = state;
    }

    whatToShow() {
        if (this._registrationFormFilled == true && this._state == this._REGISTRATION_COMPLETE) {
            this._messageWindow = `
                                    <br><br>
                                    
                                    <br><br>
                                    <button click="onShowNextMatch">Click to search for a new match</button>
                                    <br><br>`;
        } else if (this._registrationFormFilled == false && this._state == this._REGISTRATION_COMPLETE) {
            this._costumerInformation = `<i>Please select breed and gender!</i>`;
            this._messageWindow = `
                                    ${this._costumerInformation}<br><br>
                                    <small><i>Select breed</i></small><br>
                                    <form>          
                                    <select bind="_loverBreed" size="1">
                                        <option>Alien</option>
                                        <option>Fantasy</option>
                                        <option>Human</option>
                                        <option>Martian</option>
                                        <option>Unknown</option>
                                    </select>
                                    </form>
                                    <br>
                                    <small><i>Select gender</i></small>
                                    <form>          
                                    <select bind="_loverGender" size="1">
                                        <option>Female</option>
                                        <option>Male</option>
                                        <option>Unknown</option>
                                    </select>
                                    </form>  
                                    <br><br><button click="onSearchForAMatch">Press here to begin your search for your perfect match!</button>
                                `;
        } else {
            this._costumerInformation = `<br><br>
                                        <h1>Welcome onboard to where löf of all kinds meet and... Yeah yeah, you get the rest :D
                                        <br><br>
                                        Please register on "My page" today... And its all for FREE!</h1>
                                        <br><br><button click="onChangeToRegisterPage">Register new user</button>
                                        <br><br><br>
                                        <i>"To love and be loved is to feel the sun from both sides."<br><small> -Löf words from a true löfer...</small></i>
                                        <br><br>`;
            this._messageWindow = `
                                    ${this._costumerInformation}
                                `;
        }

        return this._messageWindow;
    }

    onShowNextMatch() {
        this._registrationFormFilled = false;
        this._state = this._REGISTRATION_COMPLETE;
        this._lovers.pop();
    }

    onChangeToRegisterPage() {
        this._start.setNewState(2) //1-start page, 2-for registration page, 3-about page

    }

    onSearchForAMatch() {
        let shuffleLover = new Lover(this._loverBreed, this._loverGender)
        this._lovers.push(shuffleLover);

        this._state = this._REGISTRATION_COMPLETE;
        this._registrationFormFilled = true;
    }
}
