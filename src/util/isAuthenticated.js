import TokenService from '../services/token';

const isAuthenticated = () => !!TokenService.getToken();

export default isAuthenticated;
