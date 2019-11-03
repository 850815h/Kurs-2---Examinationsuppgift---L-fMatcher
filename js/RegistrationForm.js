class RegistrationForm extends Domer {

    _REGISTRATION_NEEDED = 0;
    _REGISTRATION_COMPLETE = 1;

    _state = this._REGISTRATION_NEEDED;
    _registrationFormFilled = false;

    _aboutPlatformMessage = "This Löf-finder Was Made With Mucho Löööf And Domer <br> ";

    _userName = "";
    _userAge = 0;
    _userEMail = "";

    _users = [];

    _costumerInformation = `Register today for FREE!`;
    _messageWindow;

    constructor(start) {
        super();
        this._start = start;
    }

    render(html) {
        return html`
            <section class="whatToShowContainer">

                ${this.whatToShow()}

            </section>
        `;
    }

    whatToShow() {
        if (this._registrationFormFilled == true && this._state == this._REGISTRATION_COMPLETE) {
            this._messageWindow = `                                    
                                    ${this.onCreateUser()}
                                `;
        } else if (this._registrationFormFilled == false && this._state == this._REGISTRATION_NEEDED) {
            this._messageWindow = `
                                    <input bind="_userName" placeholder="Name?"><br>
                                    <input bind="_userAge" placeholder="Age?"><br>
                                    <input bind="_userEmail" placeholder="eMail?"><br><br>
                                    <br><br>
                                    <button click="onRegisterUserClick">Complete your registration by clicking here</button>
                                `;
        }

        return this._messageWindow;
    }

    onRegisterUserClick() {

        this._state = this._REGISTRATION_COMPLETE;
        this._registrationFormFilled = true;

        this._start.changeState(this._REGISTRATION_COMPLETE);
    }

    onCreateUser() {
        this._costumerInformation = `<strong><i>Welcome ${this._userName}. <br>
                                    This is your profile!</i></strong>`;
        this._messageWindow = `
                           
                                ${this._costumerInformation}<br><br>
                                <img src="/img/hearts1.jpg" width=50 hight=50><br><br>
                                <h1>${`Name: ${this._userName}`}</h1><br>
                                <h1>${`Age: ${this._userAge}`}</h1><br>
                                <h1>${`eMail: ${this._userAge}`}</h1><br></br>
                            `;

        return this._messageWindow;
    }
}