import createUser from '../../../server/mongodb/actions/createUser.js';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    try {
      await createUser(req.body)
    } catch (error) {
      res.status(500).send("Failed")
    }
  } else {
    res.status(400).end(`Method ${req.method} Not Allowed!`);
  }
  res.status(200).send("Success")
}
