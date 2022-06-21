import fs from 'fs';
const contactForm = '/neededforcontactform.html';

export default function handler(req, res) {
  console.log(req.body);
  res.status(200).json(JSON.stringify({ name: 'Success' }));
}
