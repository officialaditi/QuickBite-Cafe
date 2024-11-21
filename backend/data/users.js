import brcrypt from 'bcryptjs';

const users = [
  {
    fullname: "Aditi",
    email: "aditi@example.com",
    phoneNumber: "123456789",
    password: brcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    fullname: "John Doe",
    email: "john@example.com",
    phoneNumber: "987654321",
    password: brcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
