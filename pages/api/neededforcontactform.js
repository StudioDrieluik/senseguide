import fs from 'fs';
const contactForm = '/neededforcontactform.html';

export default async function api(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write(await fs.readFileSync(contactForm, 'utf-8'));
  res.end();
}
