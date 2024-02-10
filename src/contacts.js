const fs = require("node:fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function readContacts() {
  const data = await fs.readFile(contactsPath, { encoding: "utf-8" });

  return JSON.parse(data);
}

function writeContacts(contacts) {
  return fs.writeFile(contactsPath, JSON.stringify(contacts, undefined, 2));
}

async function listContacts() {
  const contacts = await readContacts();
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await readContacts();

  const contact = contacts.find((contact) => contact.id === contactId);
  return contact;
}
async function addContact(name, email, phone) {
  const contacts = await readContacts();
  const contact = { name, email, phone };
  contacts.push(contact);

  await writeContacts(contacts);
}
