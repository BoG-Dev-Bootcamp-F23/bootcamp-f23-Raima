import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser.js"

export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      const result = await readTicketsByUser(req.query);
      if (result.length > 0) {
        return res.status(200).send(result);
      } else {
        return res.status(400).send("User has no tickets");
      }
    } catch (error) {
      if (error.statusCode === 400) {
        return res.status(400).send(error.message);
      } else {
        return res.status(500).send("Failed");
      }
    }
  } else {
    return res.status(400).end(`Method ${req.method} Not Allowed`);
  }
}