import { createSlice } from "@reduxjs/toolkit";

const CONTACTS_INITIAL_STATE = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: CONTACTS_INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.contacts;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
