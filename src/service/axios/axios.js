import axios from "axios";

import baseURL from "../../urls/urls";

export const axiosServiceMovies = axios.create({
    baseURL:baseURL
});
