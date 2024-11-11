import { supabase } from '@/services/supabase';
import { useState, useEffect } from 'react';

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data } = await supabase.from('countries').select();
        setCountries(data);
        console.log(data, 'RESPONSE');
    }
    return (
        <main>
            <h1 className="text-center text-3xl">Countries</h1>
            <ul className="grid grid-cols-3 gap-2">
                {countries.map((country) => (
                    <li className="border border-black p-2" key={country.name}>
                        {country.name}
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default App;
