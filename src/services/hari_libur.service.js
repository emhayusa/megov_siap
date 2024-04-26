import http from "./http-common";
import authHeader from "./auth-header";
const base = "hari_libur";

const getAll = () => {
  return http.get(`/${base}`, { headers: authHeader() });
};

const get = (uuid) => {
  return http.get(`/${base}/${uuid}`);
};

const create = (data) => {
  return http.post(`/${base}/`, data, { headers: authHeader() });
};

const update = (uuid, data) => {
  return http.put(`/${base}/${uuid}`, data, { headers: authHeader() });
};

const remove = (uuid) => {
  return http.delete(`/${base}/${uuid}`, { headers: authHeader() });
};

const Service = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default Service;
