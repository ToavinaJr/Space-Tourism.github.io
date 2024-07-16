const baseUrl = "data/data.json"

const fetchData = async () => {
    try {
        const response  = fetch(baseUrl);
        if (!(await response).ok) {
            throw new Error(`Erreur lors de la transformation du data : ${(await response).statusText}`);
        }

        return (await response).json();
    }
    catch( error ) {
        console.error("Erreur lors de l'extraction ", error);
        throw error;
    }
}

export default fetchData;