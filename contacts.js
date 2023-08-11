const fs = require("fs/promises");

const path = require("path");

const crypto = require("crypto");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contactsList = JSON.parse(data);
  return contactsList;
}

async function getContactById(contactId) {
  const data = await listContacts();
  return data.find((contact) => contact.id === contactId) || null;
}

async function removeContact(contactId) {
  const contactToRemove = await getContactById(contactId);
  if (contactToRemove) {
    const data = await listContacts();
    const updatedContacts = data.filter((contact) => contact.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
  }
  return contactToRemove;
}

async function addContact(contact) {
  const data = await listContacts();

  const newContact = { ...contact, id: crypto.randomUUID() };

  data.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return newContact || null;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
