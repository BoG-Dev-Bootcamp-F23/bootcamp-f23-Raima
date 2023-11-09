import deleteTicket from '../../../server/mongodb/actions/deleteTicket.js';

export default async function handler(req, res) {
  if (req.method == 'DELETE') {
    try {
      await deleteTicket(req.query);
    } catch (error) {
      if (error.statusCode === 400) {
        return res.status(400).send(error.message);
      } else {
        return res.status(500).send("Failed");
      }
    }
  } else {
    res.status(400).end(`Method ${req.method} Not Allowed`);
  }
  res.status(200).send('Success');
}
