import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, Navigate, redirect } from "react-router-dom";
import { useTrans } from "./../../Context/TransContext/TransContext";
import Spinner from "./../../Components/Spinner/Spinner";
import { useAuth } from "./../../Context/AuthContext/AuthContext";
import { PATHS } from "./../../Routes/url";

function TrackOauth() {
    const { trans } = useTrans();
    const navigate = useRef(useNavigate());
    const { postWithToken, token, loggedIn } = useAuth();
    const [loading, setLoading] = useState(true);
    
    const postWithRef = useRef(postWithToken);
    const tokenRef = useRef(token)

    useEffect(() => {
        let ignore = false;
        const abortController = new AbortController();

        if (trans) {
            // Get query string
            const queryStr = window.location.search;
        
            // Extract the query strings from the query paraneters
            const urlParams = new URLSearchParams(queryStr);
        
            const code = urlParams.get("code"); // Extract code from url
        
            if (code) {
                const testTransfer = async () => {
                    const data = {
                        "code": code,
                        "history_id": trans,
                    }
                    
                    try {
                        const response = await postWithRef.current(data, PATHS.financeOAUTH, tokenRef.current, abortController.signal);
            
                        if (response.status === 200) {
                            setLoading(() => false);
                            localStorage.setItem("transaction_id", "");
                            navigate.current("/dashboard", {replace: true});
                        }
                    } catch(error) {
                        if (!ignore) {
                            setLoading(() => false);
                            navigate.current("/dashboard");
                        }
                    }
                }
                
                testTransfer();
            } else {
                // Redirect
                if (!ignore) {
                    navigate.current("/dashboard");
                    setLoading(() => false);
                }
            }
        } else {
            if (loggedIn) {
                return redirect("/dashboard");
            }
            return redirect("/login");
        }
        return () => {
            ignore = true;
            abortController.abort();
        }
    }, [trans]);

    return (
        <>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <Navigate to="/dashboard" />
                )
            }
        </>
    )
}

export default TrackOauth;
