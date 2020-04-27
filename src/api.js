import axios from 'axios';

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/guess-melody`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      //throw err
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
