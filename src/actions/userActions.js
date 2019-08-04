import axios from "axios";

export function getUsers() {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
      dispatch({ type: "FETCH_USERS_BEGIN", payload: response.data });
    });
  };
}

// export function loadUsers(res) {
//   return { type: "RECEIVE_USERS", payload: res.data };
// }
