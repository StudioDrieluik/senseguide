import fs from 'fs';
const downloadForm = '/neededfordownloadform.html';

export default async function api(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write(await fs.readFileSync(downloadForm, 'utf-8'));
  res.end();
}
