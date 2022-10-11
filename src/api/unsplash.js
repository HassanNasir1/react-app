import axios from "./axios";

// Make a request for a user with a given ID
export function getImages() {
  return axios
    .get("https://api.unsplash.com/search/photos", {
      params: {
        query: "courses",
        client_id: "wpRrjYR5dpxtEDFOQJEhA_y_Pv1Ld1QE52ZsXzJAVM8",
      },
    })
    .then(function (response) {
      // handle success

      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
