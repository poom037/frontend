"use client"

import { requestToBodyStream } from "next/dist/server/body-streams";
import { useEffect } from "react"

function BootstrapClient(){
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    },[]);
    
    return null;
}

export default BootstrapClient;