import { Icon } from "@iconify/react";

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const Home = () => {
    // DATA SET
    const [datas, setDatas] = useState([])
    // DATA FETCHING
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(res => setDatas(res))
    },[])

    return (
        <>
            {/* HOMEContainer */}
            <div className="homeContainer">
                {/* Every info will load in card */}
                {datas.map(data => <div key={data.show.id} className="cardShow">
                    <img className="cardImg" src={data?.show?.image?.medium ? data?.show?.image?.medium : "https://i.ibb.co/Xypy0MX/Group-1000003711.png"} alt="" />
                    <div className='cardInfo'>
                        <div>
                            <h3>{data.show.name}</h3>
                            <p className="pt-2">Language: {data?.show?.language}</p>
                        </div>

                        <div >
                            <Icon icon="bx:star" color="#ffe234" /> <span>{data?.show?.rating?.average ? data?.show?.rating?.average : "Not Available"}</span>
                            <p className="pt-2">{data?.show?.premiered ? data?.show?.premiered : "Not Available"}</p>
                        </div>
                    </div>
                    <Link to={`/${data.show.name}`}><button className="btn">Details</button></Link>
                </div>)}
            </div>
        </>
    );
};

export default Home;