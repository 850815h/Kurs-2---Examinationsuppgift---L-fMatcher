class Start extends Domer {

    _matchPartner = new MatchPartner(this);
    _registrationForm = new RegistrationForm(this);
    _about = new About();

    constructor() {
        super();

        this._activeState = this._matchPartner;
    }

    render(html) {
        return html`
            <section class="whatToShowContainer">
            
                <section id="buttonMenu">
                    <button id="buttonFindPartner" click="onFindPartner">Find my Löfer</button>
                    <button id="buttonRegisterUser" click="onRegisterUser">My page</button>
                    <button id="buttonAbout" click="onAbout">About</button>
                </section>

                <br>

                <section class="whatToShowContainer">
                    ${this._activeState}
                </section>
                
            </section>
        `;
    }

    setNewState(newState) {

        switch (newState) {
            case 1:
                this.onFindPartner();
                break;
            case 2:
                this.onRegisterUser();
                break;
            case 3:
                this.onAbout();
                break;
        }

    }

    addNewLover(newLover) {
        this._matchPartner.addNewLover(newLover);
    }

    changeState(state) {
        this._matchPartner.changeState(state);
    }

    showRegisteredUser(user) {
        this._registrationForm.showRegisteredUser(user);
    }

    onFindPartner() {
        this._activeState = this._matchPartner;
    }
    onRegisterUser() {
        this._activeState = this._registrationForm;
    }
    onAbout() {
        this._activeState = this._about;
    }

}