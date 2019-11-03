class About extends RegistrationForm {

    constructor() {
        super();
    }

    render(html) {
        return html`
            <section class="whatToShowContainer">

                <br><br><br>
                <h1><strong>${this._aboutPlatformMessage}</strong>
                <i><small>Yours, Hassanova</small></i></h1>
                <br><br><br>

            </section>
        `;
    }
}