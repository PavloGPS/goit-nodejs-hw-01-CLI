const Contacts = require("./contacts");
const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await Contacts.listContacts();
      return contactsList;

    case "get":
      const contact = await Contacts.getContactById(id);
      return contact;

    case "add":
      const neWcontact = await Contacts.addContact({ name, email, phone });
      return neWcontact;

    case "remove":
      const removedContact = await Contacts.removeContact(id);
      return removedContact;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
