import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import StatusCard from '../components/status-card/StatusCard'
import statusCards from '../assets/JsonData/status-card-movie.json'



const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)


const Mmovie = () => {
    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    return (
        <div>
            <h2 className="page-header">Menu peliculas en ingles</h2>
            <div className="row">
                <div className="col-20">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-8" key={index}>
                                <Link to={item.link}>
                                        <StatusCard
                                            icon={item.icon}
                                            count={item.count}
                                            title={item.title}
                                        />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mmovie
