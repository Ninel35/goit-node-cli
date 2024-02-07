const fs = require('node:fs');

const contactsPath = './db/contacts.json';


fs.readFile(contactsPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data)
})

// async function listContacts() { 
//     const data = await fs.readFile(contactsPath, { encoding: 'utf-8' })
//     console.log(data)
//     return data;
// }


// async function getContactById(contactId) {
//   // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
// }

// async function removeContact(contactId) {
//   // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }

// async function addContact(name, email, phone) {
//   // ...твій код. Повертає об'єкт доданого контакту (з id).
// }
