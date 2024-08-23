const baseURL = import.meta.env.VITE_API_URL;

export async function getPosts(options) {
  console.log(options.params);
  var getpostURL = baseURL + "/posts";
  getpostURL += "?" + new URLSearchParams(options.params).toString();
  // getpostURL.search = new URLSearchParams(options.params).toString();
  // if (
  //   options.params.q !== null ||
  //   options.params.q !== "" ||
  //   options.params.userId !== null
  // ) {
  //   getpostURL = baseURL + `/posts?` + new URLSearchParams(`${options.params}`);
  // }
  console.log(getpostURL);
  return fetch(getpostURL, options).then((response) => {
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

export async function getPostItem(options, postID) {
  return fetch(baseURL + `/posts/${postID}`, options).then((response) => {
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

export async function addPostItem(data) {
  data.id = self.crypto.randomUUID();
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  // console.log(options);
  return await fetch(baseURL + "/posts", options).then((response) => {
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

export async function editPostItem(data, postId) {
  const options = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  // console.log(options);
  return await fetch(baseURL + `/posts/${postId}`, options).then((response) => {
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
