import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dashboard(props) {

    const [data,setdata] = useState({});

    useEffect(async ()=>{
        const newdata = await axios.get(Backend_url+'/api/data/alldata')
    },[]);
    return (
        <div>
            
        </div>
    );
}

export default Dashboard;