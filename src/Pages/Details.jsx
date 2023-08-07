import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    // MODAL OPEN
    const [open, setOpen] = useState(false)
    const { name } = useParams()
    // DATA SET
    const [datas, setDatas] = useState([])
    // DATA FETCHING
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(res => setDatas(res))
    }, [])
    // Filtering Data

    const [filteredData] = datas.filter((dta) => name === dta?.show?.name)
    const filteredInnerData = filteredData?.show
    const htmlContent = filteredInnerData?.summary

    // Form Submit
    const handleSubmit = event => {
        event.preventDefault()
        const target = event.target
        const name = target.name.value
        const phone = target.phone.value
        const quantity = target.quantity.value
        localStorage.setItem("Name", name)
        localStorage.setItem("Phone", phone)
        localStorage.setItem("Quantity", quantity)
        localStorage.setItem("Movie", filteredData?.show?.name)
        setOpen(!open)
        alert("Your Ticket is Booked, Check LocalStorage")
    }
    return (
        <>
            <div className='sumContainer'>
                <h1 className='text-center my-5'>{filteredData?.show?.name}</h1>
                <img className='summaryImg' src={filteredData?.show?.image?.original} alt="" />
                <h2 className='text-center'>Summary</h2>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                <div className='cardInfo2'>
                    <p><b>Language: </b>{filteredData?.show?.language}</p>
                    <p><b>Type: </b>{filteredData?.show?.type}</p>
                    <p><b>Premiered: </b>{filteredData?.show?.premiered}</p>
                    <p><b>Genre: </b>{filteredData?.show?.genres.map(data => <span key={data}> {data} ||</span>)}</p>
                </div>
                <a href="#book"><button className="btn2" onClick={() => setOpen(!open)}>BOOK NOW</button></a>
                <div id='book' className={open ? 'book' : "visually-hidden"}>
                    <h1 className='text-center my-5'>{filteredData?.show?.name}</h1>
                    <form onSubmit={handleSubmit} className='text-center'>
                        <p>Name</p>
                        <input className='input' type="text" name='name' />
                        <p>Phone</p>
                        <input className='input' type="number" name='phone' />
                        <p>Quantity</p>
                        <input className='input' type="number" name='quantity' />
                        <div>
                            <input className='btn' type="submit" value="BOOK NOW" name='address' />
                        </div>
                    </form>
                    <button className="btn2" onClick={() => setOpen(!open)}>Close</button>
                </div>
            </div>
        </>
    );
};

export default Details;