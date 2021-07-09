const fs = require('fs');
const path = require('path');

const contactsPath = path.resolve('db/contacts.json');

function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) throw err;
    const normalizedData = JSON.parse(data.toString());
    const currentUser = normalizedData.find(
      user => String(user.id) === contactId,
    );
    if (currentUser === undefined) {
      console.log('User not found');
    } else {
      console.log(currentUser);
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) throw err;
    const normalizedData = JSON.parse(data.toString());
    const found = normalizedData.some(user => String(user.id) === contactId);
    if (!found) {
      return console.log('User not found');
    }
    const filteredUsers = normalizedData.filter(
      user => String(user.id) !== contactId,
    );
    const stringified = JSON.stringify(filteredUsers, null, ' ');
    fs.writeFile(contactsPath, stringified, err => {
      if (err) throw err;
    });
    console.log('Contact deleted');
    console.log(stringified);
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) throw err;
    const normalizedData = JSON.parse(data.toString());
    const newContact = {
      id: '_' + Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
    };
    normalizedData.push(newContact);
    const stringified = JSON.stringify(normalizedData, null, ' ');
    fs.writeFile(contactsPath, stringified, err => {
      if (err) throw err;
    });
    console.log('Contact added');
    console.log(stringified);
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
