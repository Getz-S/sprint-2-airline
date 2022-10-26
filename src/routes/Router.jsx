import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Flights from "../components/flights/Flights";
import { NoMatch } from "../components/noMatch/NoMatch";
import OneWay from "../components/oneWay/OneWay";
import RoundTrip from "../components/roundTrip/RoundTrip";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RoundTrip/>} />
                <Route path="oneWay" element={<OneWay/>} />
                <Route path="*" element={<NoMatch/>}/>
                <Route path="flights" element={<Flights/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;