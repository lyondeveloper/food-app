import axios from 'axios';
import routes from './routes';

export const getServices = async () => {
  try {
    const { data } = await axios.get(`${routes.local}/services`);

    return data;
  } catch (e) {
    return e;
  }
};

export const getService = async () => {
  try {
    const { data } = await axios.get(`${routes.local}/service`);

    return data;
  } catch (e) {
    return e;
  }
};
