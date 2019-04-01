/* global fetch FormData */
import tokenService from './token';

export default class Http {
    /**
     * Send a GET request to the given URL.
     * @param {String} url a URL where the request is send.
     * @returns {Promise<any>} A promise with the response body when the request is completed.
     */
    static async get(url) {
        const response = await fetch(url, {
            credentials: 'same-origin',
            headers: {
                authorization: await tokenService.getAuthHeader()
            }
        });
        return response.json();
    }

    /**
     * Send a POST request to the given URL.
     * @param {string} url a URL where the request is send.
     * @param {any} body data to be included in the request body.
     * @returns {Promise<any>} A promise with the response body when the request is completed.
     */
    static async post(url, body) {
        const response = await fetch(url, {
            method: 'post',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                authorization: await tokenService.getAuthHeader()
            }
        });
        return response.json();
    }

    /**
     * Send a PUT request to the given URL.
     * @param {string} url a URL where the request is send.
     * @param {any} body data to be included in the request body.
     * @returns {Promise<any>} A promise with the response body when the request is completed.
     */
    static async put(url, body) {
        const response = await fetch(url, {
            method: 'put',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                authorization: await tokenService.getAuthHeader()
            }
        });
        return response.json();
    }

    /**
     * Send a DELETE request to the given URL.
     * @param {string} url a URL where the request is send.
     * @param {any} body data to be included in the request body.
     * @returns {Promise<any>} A promise with the response body when the request is completed.
     */
    static async del(url, body) {
        const response = await fetch(url, {
            method: 'delete',
            credentials: 'same-origin',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                authorization: await tokenService.getAuthHeader()
            }
        });
        return response.json();
    }

    /**
     * Send a POST file request to the given URL.
     * @param {string} url a URL where the request is send.
     * @param {Blob} file a file to be send in the request body.
     * @returns {Promise<any>} A promise with the response body when the request is completed.
     */
    static async postFile(url, file) {
        const data = new FormData();
        data.append('file', file);

        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                authorization: await tokenService.getAuthHeader()
            },
            body: data
        });
        return response.json();
    }
}
