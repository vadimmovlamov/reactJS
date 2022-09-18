// создаем функцию которая будет делать запрос на сервер для регистрации

import {api} from "../../../api/config";

export const signUp = (signUpInfo) => api.post(`/auth/signup/`, signUpInfo); // , signUpInfo мы сюда положили объект и он попадет в запрос