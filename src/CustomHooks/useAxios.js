import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (endpoint) => {
    const [data, setData] = useState([]);
    console.log(endpoint)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(endpoint.url, 
                    endpoint.headers
                );
                setData(response.data);
            } catch (error) {
                console.error("axios error", error);
            }
        };

        fetchData();
    }, [endpoint]);

    return data;
};

export default useAxios;
