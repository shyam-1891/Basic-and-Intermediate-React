const baseURL = import.meta.env.VITE_API_URL;

export async function getTodos(options) {
  return fetch(baseURL + "/todos", options).then((response) => {
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
