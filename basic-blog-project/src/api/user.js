const baseURL = import.meta.env.VITE_API_URL;

export async function getUsers(options) {
  return fetch(baseURL + "/users", options).then((response) => {
    return response
      .json()
      .then((data) => {
        // console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

export async function getUserDetail(options, userID) {
  return fetch(baseURL + `/users/${userID}`, options).then((response) => {
    return response
      .json()
      .then((data) => {
        // console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
