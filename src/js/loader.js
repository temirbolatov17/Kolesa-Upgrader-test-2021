class Loader {
    constructor() {
        this._element = document.createElement('div');
        this._element.setAttribute('id', 'loader');
        this._element.innerHTML = 'Loading...';
        this._element.style.display = 'none';
        document.querySelector('#app').append(this._element);
    }

    showLoader() {
        this._element.style.display = 'block';
    }

    hideLoader() {
        this._element.style.display = 'none';
    }
}

export default Loader;
