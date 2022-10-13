import axios from "./axios";

// Make a request for a user with a given ID
export function getAll() {
  return axios
    .get("/course")
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

export function add(courseName, courseCode, courseType, courseDescription) {
    const data = {
      courseName: courseName,
      courseCode: courseCode,
      courseType: courseType,
      courseDescription: courseDescription,
    };
    return axios.post("/course/", data)
      .then((response) => {
          console.log(response);
       return response;
      })
      .catch((error) => {
          return Promise.reject(error.response.data.message);
      });
  }

export function remove(id) {
  return axios
    .delete(`/course/${id}`)
    .then(function (response) {
      // handle success
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export function updateCourse(id, courseName, courseCode, courseType) {
  const data = {
    courseName: courseName,
    courseCode: courseCode,
    courseType: courseType,
  };
  console.log('data', data)
  return axios
    .put(`/course/${id}`, data)
    .then(function (response) {
      console.log('res', response);
      return Promise.resolve(response); 
      // handle success
    })
    .catch(function (error) {
      // handle error
      console.log('error',error);
      return Promise.reject(error.response.data);
    })
    .finally(function () {
      // always executed
    });
}