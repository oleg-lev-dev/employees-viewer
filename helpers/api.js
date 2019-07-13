const API_ROOT = 'http://localhost:8000/api';

export default {
  get(route, query) {
    return fetch(`${API_ROOT}/${route}`, query);
  },
  post(route, payload) {
    return fetch(`${API_ROOT}/${route}`, {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {'Content-type': 'application/json'}
    });
  },
  put(route, payload) {
    return fetch(`${API_ROOT}/${route}`, {
      method: 'put',
      body: JSON.stringify(payload),
      headers: {'Content-type': 'application/json'}
    });
  },
  del(route) {
    return fetch(`${API_ROOT}/${route}`, {
      method: 'delete'
    });
  }
}
