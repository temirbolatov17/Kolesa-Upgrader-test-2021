class Error {
    constructor() {
        this._element = document.createElement('div');
        this._element.setAttribute('id', 'error');
        this._element.style.display = 'none';
        document.querySelector('#app').append(this._element);
    }

    showError() {
        this._element.style.display = 'block';
    }

    hideError() {
        this._element.style.display = 'none';
    }

    createErrorMessage(text) {
        this._element.innerHTML = text;
    }
}

export default Error;
