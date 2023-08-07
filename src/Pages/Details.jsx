import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const { name } = useParams()
    // DATA SET
    const [datas, setDatas] = useState([])
    // console.log(datas)
    // DATA FETCHING
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(res => setDatas(res))
    }, [])
    // Filtering Data

    const [filteredData] = datas.filter((dta) => name === dta?.show?.name)
    console.log(filteredData)
    return (
        <>
            <div className='sumContainer'>
                <h1 className='text-center my-5'>{filteredData?.show?.name}</h1>
                <img className='summaryImg' src={filteredData?.show?.image?.original} alt="" />
            </div>
        </>
    );
};

export default Details;