const fs = require("fs/promises");

const path = require("path");

const crypto = require("crypto");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contactsList = JSON.parse(data);
    return contactsList;
  } catch (error) {
    console.error("Error reading contacts:", error.message);
    return null;
  }
}

async function getContactById(contactId) {
  try {
    const data = await listContacts();
    return data.find((contact) => contact.id === contactId) || null;
  } catch (error) {
    console.error("Error getting contact:", error.message);
    return null;
  }
}

async function removeContact(contactId) {
  try {
    const contactToRemove = await getContactById(contactId);
    if (contactToRemove) {
      const data = await listContacts();
      const updatedContacts = data.filter(
        (contact) => contact.id !== contactId
      );
      await fs.writeFile(
        contactsPath,
        JSON.stringify(updatedContacts, null, 2)
      );
    } else console.error("Contact not found");
    return contactToRemove;
  } catch (error) {
    console.error("Error removing contact by ID:", error.message);
    return null;
  }
}

async function addContact(contact) {
  try {
    const data = await listContacts();

    const newContact = { ...contact, id: crypto.randomUUID() };

    data.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return newContact || null;
  } catch (error) {
    console.error("Error adding contact:", error.message);
    return null;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
