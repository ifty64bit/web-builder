import api from "eden";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        async function fetchData() {
            const response = await api.hello({ name: "Ifty" }).get();
            setData(response.data);
        }
        fetchData();
    }, []);
    return <div>{JSON.stringify(data, null, 2)}</div>;
}

export default App;
