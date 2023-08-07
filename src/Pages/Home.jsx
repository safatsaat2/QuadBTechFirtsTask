import { Icon } from "@iconify/react";

// import { useState } from 'react';
const Home = () => {
    // const [data, setData] = useState([])

    fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        // .then(res => setData(res))

    return (
        <>
            <div className="homeContainer">
                <div className="cardShow">
                    <img src="https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg" alt="" />
                    <div className='cardInfo'>
                        <div>
                            <h3>Name</h3>
                            <p>genres</p>
                        </div>
                        <button>See More</button>
                        <div>
                            <Icon icon="bx:star" color="#ffe234" /> <span>star</span>
                            <p>premiered</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;