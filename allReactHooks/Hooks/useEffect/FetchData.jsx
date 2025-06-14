import React, { useEffect } from 'react'

const FetchData = () => {
    useEffect(() => {
        const fetchDataFromApi = async () => {
            const api = await fetch('https://jsonplaceholder.typicode.com/users')
            const result=await api.json();
            console.log(result);
        };
        fetchDataFromApi();
    }, [])

    return (
        <div>
        <button >here is the button</button>

        </div>
    )
}

export default FetchData
