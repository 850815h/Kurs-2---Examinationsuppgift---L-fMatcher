class User extends RegistrationForm {

    constructor(name, age, email ) {
        super();

        this._userName = name;
        this._userAge = age;
        this._userEMail = email;
        
    }

    render(html) {
        return html`
            <section class="whatToShowContainer">

                <img src="/img/hearts1.jpg">
                <h1>${`Name: ${this._userName}`}</h1><br>
                <h1>${`Age: ${this._userAge}`}</h1><br>
                <h1>${`eMail: ${this._userAge}`}</h1><br>

            </section>
        `;
    }
}