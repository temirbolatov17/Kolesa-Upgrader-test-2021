class App {
    constructor() {
        this._element = document.createElement('div');
        this._element.setAttribute('id', 'app');
    }

    showApp() {
        document.body.appendChild(this._element);
    }

    createAppMessage(text) {
        this._element.innerHTML = text;
    }

    addButtonListener(listener) {
        this._element.querySelectorAll('button').forEach((button) => {
            button.addEventListener('click', listener);
        });
    }
}

export default App;
