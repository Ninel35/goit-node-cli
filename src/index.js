const { program } = require("commander");

const Contacts = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await Contacts.listContacts();
      return contacts;

    case "get":
      const getContact = await Contacts.getContactById(id);
      return getContact;

    case "add":
      const addedContact = await Contacts.addContact(name, email, phone);
      return addedContact;

    case "remove":
      const removedContact = await Contacts.removeContact(id);
      return removedContact;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options).then(console.log).catch(console.error);
