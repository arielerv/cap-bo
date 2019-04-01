/* global localStorage */
const TOKEN_KEY = 'id_token';

const throwRefreshTokenError = () => {
    throw new Error('Error: The refresh token should not be used on web browsers.');
};

export default class TokenService {
    /**
     * Store the session token
     * @param token A token to be saved.
     */
    static setToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    }

    /**
     * Get the session token.
     * @returns {string} Returns the current session token.
     */
    static getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    /**
     * Store the refresh token
     */
    static setRefreshToken() {
        throwRefreshTokenError();
    }

    /**
     * Get the refresh token.
     */
    static getRefreshToken() {
        throwRefreshTokenError();
    }

    /**
     * Check if a token session is present.
     * @returns {boolean} Returns True when a token is present.
     */
    static hasSession() {
        return !!localStorage.getItem(TOKEN_KEY);
    }

    /**
     * Clear the session token.
     */
    static clear() {
        localStorage.removeItem(TOKEN_KEY);
    }

    /**
     * Get a Bearer Auth Header for make HTTP requests.
     * @returns {string} An authorization header.
     */
    static getAuthHeader() {
        return `Bearer ${TokenService.getToken()}`;
    }
}
