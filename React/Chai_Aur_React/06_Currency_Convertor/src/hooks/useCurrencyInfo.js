// import { useEffect, useState } from "react";

// function useCurrencyInfo(euro){
//     const [data,setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${euro}.json`)
//         .then((res)=> res.json()) 
//         .then((res)=> {
//             setData(res[euro])
//             console.log("res[euro]")
//         })
        

//     }, [])
// }


import { useEffect, useState } from "react";

function useCurrencyInfo(euro) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${euro}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[euro]);
                console.log("Fetched Data:", res[euro]);  // Log the data after setting state
            })
            .catch((err) => console.error("Fetch Error:", err));

    }, [euro]);  // Add euro as a dependency

    return data; // Return the fetched data
}

export default useCurrencyInfo;