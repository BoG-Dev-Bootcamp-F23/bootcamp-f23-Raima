export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const body = req.body;
    const poke1 = body.pokemon1;
    const poke2 = body.pokemon2;

    if (!body || !poke1 || !poke2) {
        return res.status(400).json({ message: 'Missing required information' });
    }

    const url_poke1 = `https://pokeapi.co/api/v2/pokemon/${poke1}`;
    const url_poke2 = `https://pokeapi.co/api/v2/pokemon/${poke2}`;

    try {
        const response_poke1 = await fetch(url_poke1);
        const response_poke2 = await fetch(url_poke2);

        if (!response_poke1.ok || !response_poke2.ok) {
            return res.status(400).json({ message: 'One or both Pokemon not found' });
        }

        const data_poke1 = await response_poke1.json();
        const data_poke2 = await response_poke2.json();

        const basestat_poke1 = data_poke1.stats[0].base_stat;        
        const basestat_poke2 = data_poke2.stats[0].base_stat;
        if (basestat_poke1 > basestat_poke2) {
            res.status(200).json({ result: data_poke1.name });
        } else if (basestat_poke2 > basestat_poke1) {
            res.status(200).json({ result: data_poke2.name });
        } else {
            res.status(200).json({ result: "It's a tie!" });
        }
    } catch (error) {
        console.error('Error fetching Pokemon data', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
