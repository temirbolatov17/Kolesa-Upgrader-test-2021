import App from './app';
import Error from './error';
import Loader from './loader';
import { getItemsRequest, toggleFavoriteRequest } from './requests';

const LOADING_ERROR_MESSAGE = 'Произошла ошибка, попробуйте еще раз';
const LOADING_MESSAGE = 'Загрузка...';

const app = new App();
const loader = new Loader();
const error = new Error();

export default () => {
    error.hideError();
    loader.showLoader();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                error.createErrorMessage(LOADING_ERROR_MESSAGE);
                error.showError();
            } else {
                app.createAppMessage(data.html);

                app.showApp();

                app.addButtonListener((e) => {
                    e.preventDefault();

                    e.currentTarget.textContent = LOADING_MESSAGE;

                    toggleFavoriteRequest(e.currentTarget.dataset.id).then(
                        ({ data: buttonData }) => {
                            if (buttonData.result === 'set') {
                                e.currentTarget.textContent = '🌝';
                            } else {
                                e.currentTarget.textContent = '🌚';
                            }
                        },
                    );
                });
            }
        })
        .catch((e) => {
            error.createErrorMessage(e.message);

            error.showError();
        })
        .finally(() => {
            loader.hideLoader();
        });
};
