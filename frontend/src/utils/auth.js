const BASE_URL = 'https://api.valerie-oschatz.mesto.nomoredomains.sbs';

function checkServerRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then((res) => checkServerRes(res));
};

export const login = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({password, email})
  })
  .then((res) => checkServerRes(res));
};

export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include'
  })
  .then((res) => checkServerRes(res));
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include'
  })
  .then((res) => checkServerRes(res));
};