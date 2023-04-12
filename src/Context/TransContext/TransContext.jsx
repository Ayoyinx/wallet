import React, { createContext, useContext, useState, useEffect } from "react";

const TransContext = createContext();

const useTrans = () => {
    return useContext(TransContext);
}

function TransProvider({ children }) {
    const [trans, setTrans] = useState("");

    useEffect(() => {
        const getData = async () => {
            const id = localStorage.getItem("transaction_id");

            if (id) {
                setTrans(id);
            }
        }

        getData();
    }, []);

    const value = {
        trans,
        setTrans,
    };

    return (
        <TransContext.Provider value={value}>
            {children}
        </TransContext.Provider>
    )
}

export default TransProvider;
export { useTrans };