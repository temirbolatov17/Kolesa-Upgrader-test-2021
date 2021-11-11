import Loader from '../loader';
import App from '../app';

const app = new App();

describe('Тестирование DOM манипуляций', () => {
    beforeAll(() => {
        app.showApp();
    });

    it('должен добавить элемент в блок #app', () => {
        app.createAppMessage('test text');

        expect(app).toMatchSnapshot();
    });

    it('должен показать и скрыть лоадер', () => {
        const loader = new Loader();

        const loaderId = '#loader';

        loader.showLoader();

        const currentLoader = document.querySelector(loaderId);

        expect(currentLoader).toBeDefined();
        expect(currentLoader.style.display).toBe('block');
        expect(currentLoader.textContent).toBe('Loading...');

        loader.hideLoader();

        expect(currentLoader.style.display).toBe('none');
    });

    it('должен вызвать колбеки которые добавлены к кнопкам', () => {
        let buttonTemplates = '';
        const buttonClickHandler = jest.fn();

        for (let i = 0; i < 6; i += 1) {
            buttonTemplates = buttonTemplates.concat('<button></button>');
        }

        app.createAppMessage(buttonTemplates);

        const buttonElements = document.querySelectorAll('button');

        expect(buttonElements).not.toBeNull();
        expect(buttonElements.length).toBe(6);

        app.addButtonListener(buttonClickHandler);
        buttonElements.forEach((button) => { button.click(); });

        expect(buttonClickHandler).toBeCalled();
        expect(buttonClickHandler).toHaveBeenCalledTimes(6);
    });
});
