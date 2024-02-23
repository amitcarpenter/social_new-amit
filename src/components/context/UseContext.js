import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export const Contextapi = createContext();

const UseContext = ({ children }) => {
    const navigate = useNavigate();
    const userEmail = sessionStorage.getItem("userEmail");
    const [checkbuttonStatus, setcheckbuttonStatus] = useState(false);
    const [facebookstatus, setfacebookstatus] = useState(false);
    const [instastatus, setinstastatus] = useState(false);
    const [data, setdata] = useState()
    const [Role, setRole] = useState(null)

    const GetFormdata = async () => {
        const paylod = {
            "email": userEmail
        };
        try {
            const response = await axios.post(`http://192.227.234.133/backend/api/get-details-by-email`, paylod);

            const { email,
                role,
                twitter_api_key,
                twitter_api_secret,
                twitter_access_token,
                twitter_access_secret,
                twitter_bearer_token,
                twitter_app_id,
                facebook_page_id,
                facebook_access_token,
                facebook_token_expiry_time,
                instagram_username, ig_password } = response.data;

            console.log(response.data, "main data ");
            setdata(response.data)
            setRole(role)

            if (email && twitter_api_key && twitter_api_secret && twitter_access_token && twitter_access_secret && twitter_bearer_token && twitter_app_id) {
                setcheckbuttonStatus(true);
            }
            if (email && facebook_page_id && twitter_api_secret && facebook_token_expiry_time && facebook_access_token) {
                setfacebookstatus(true);
            }
            if (email && instagram_username && ig_password) {
                setinstastatus(true);
            }

        } catch (error) {
            console.error('Error fetching data:', error);

        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("userEmail");
        navigate("/");
    };

    useEffect(() => {
        if (userEmail) {
            GetFormdata();
        }
    }, [checkbuttonStatus, facebookstatus,userEmail, instastatus,]);

    return (
        <Contextapi.Provider value={{
            Role,
            setRole,
            data,
            setdata,
            userEmail,
            checkbuttonStatus,
            setcheckbuttonStatus,
            facebookstatus,
            setfacebookstatus,
            instastatus,
            setinstastatus,
            handleLogout,
        }}>
            {children}
        </Contextapi.Provider>
    );
}

export const useContextApi = () => useContext(Contextapi);

export default UseContext;
