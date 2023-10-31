export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const type = req.query.type;

    const url = `https://pokeapi.co/api/v2/type/${type}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return res.status(400).json({ message: 'Type not found' });
        }
        const data = await response.json();
        const poke_list = data.pokemon.map(pokemon => pokemon.pokemon.name);
        res.status(200).json(poke_list);
    } catch (error) {
        console.error('Error fetching Pokemon data', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
