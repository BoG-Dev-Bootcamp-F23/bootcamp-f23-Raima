export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const name = req.query.name;

    const url = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return res.status(400).json({ message: 'Pokemon not found' });
        }
        const data = await response.json();
        const evolution_chain_url = data.evolution_chain.url;
        const evolution_response = await fetch(evolution_chain_url);
        const evolution_data = await evolution_response.json();
        let nextEvolution = name;
        let current = evolution_data.chain;
        while (current) {
            if (current.species.name === name) {
                if (current.evolves_to.length) {
                    nextEvolution = current.evolves_to[0].species.name;
                }
                break;
            }
            current = current.evolves_to[0];
        }
        res.status(200).json({nextEvolution: nextEvolution});
    } catch (error) {
        console.error('Error fetching Pokemon data', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}