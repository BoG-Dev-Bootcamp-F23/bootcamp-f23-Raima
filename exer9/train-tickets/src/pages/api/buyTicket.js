import createTicket from '../../../server/mongodb/actions/createTicket.js';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    try {
      await createTicket(req.body)
    } catch (error) {
      res.status(500).send("Failed")
    }
  } else {
    res.status(400).end(`Method ${req.method} Not Allowed!`);
  }
  res.status(200).send("Success")
}
