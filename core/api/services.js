import axios from 'axios';
import routes from './routes';

export const getServices = async (param = '') => {
  try {
    const { data } = await axios.get(`${routes.local}/services`);
    if (param?.length > 0) {
      const dataFiltered = data.filter((item) => item.title.includes(param));
      return dataFiltered || [];
    }
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
