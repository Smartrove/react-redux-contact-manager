import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";
import axios from "axios";
// import uuid from "uuid";

export const getContacts = () => async (dispatch) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  console.log(res);
  dispatch({
    type: GET_CONTACTS,
    payloads: res.data,
  });
};
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});
