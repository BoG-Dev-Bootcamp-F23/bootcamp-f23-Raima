export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${req.query.name}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return res.status(400).json({ message: 'Pokemon not found' });
        }
        const data = await response.json();
        const types = data.types.map(type => type.type.name);
        const result = {
            name: data.name,
            sprite: data.sprites.front_default,
            types: types
        }
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching Pokemon data', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
