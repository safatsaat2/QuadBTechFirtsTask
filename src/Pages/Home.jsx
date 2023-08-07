import { Icon } from "@iconify/react";

import { useState } from 'react';
const Home = () => {
    const [datas, setDatas] = useState([])

    fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(res => setDatas(res))

    return (
        <>
            <div className="homeContainer">
                {datas.map(data => <div key={data.show.id} className="cardShow">
                    <img src={data?.show?.image?.medium} alt="" />
                    <div className='cardInfo'>
                        <div>
                            <h3>{data.show.name}</h3>
                            <p>genres</p>
                        </div>
                        <button>See More</button>
                        <div>
                            <Icon icon="bx:star" color="#ffe234" /> <span>star</span>
                            <p>premiered</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    );
};

export default Home;