import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'
import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const peliculas = {
    head: [
        'No.',
        'Nombre',
        'Fecha'
    ],
    body: [
        {
            "id": "1",
            "nombre": "Spider-Man: Lejos de casa",
            "fecha": "15/02/2022"
        },
        {
            "id": "2",
            "nombre": " Plan de escape",
            "fecha": "15/02/2022"
        },
        {
            "id": "3",
            "nombre": "Jack Reacher: Never Go Back",
            "fecha": "15/02/2022"
        },
        {
            "id": "4",
            "nombre": "Anne+: La película",
            "fecha": "15/02/2022"
        },
        {
            "id": "5",
            "nombre": "Hasta el último hombre",
            "fecha": "15/02/2022"
        }
    ]
}

const rendermovieHead = (item, index) => (
    <th key={index}>{item}</th>
)

const rendermovieBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.nombre}</td>
        <td>{item.fecha}</td>
    </tr>
)

const latestOrders = {
    header: [
        "No.",
        "Nombre",
        "Fecha",
    ],
    body: [
        {
            id: "1",
            nombre: "Being the Ricardos",
            date: "15/02/2022"
        },
        {
            id: "2",
            nombre: "Snake Eyes: G.I. Joe Origins",
            date: "15/02/2022"
        },
        {
            id: "3",
            nombre: "Scream",
            date: "15/02/2022"
        },
        {
            id: "4",
            nombre: "Don't Look Up",
            date: "15/02/2022"
        },
        {
            id: "5",
            nombre: "American History X",
            date: "15/02/2022"
        }
    ]
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.nombre}</td>
        <td>{item.date}</td>
    </tr>
)

const Dashboard = () => {
    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    return (
        <div>
            <h2 className="page-header">Inicio</h2>
            <div className="row">
                <div className="col-20">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-4" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/*                 
                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                 */}


                <div className="col-6">
                    <div className="card">
                        <div className="card__header">
                            <h3>Peliculas español recien añadidas</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={peliculas.head}
                                renderHead={(item, index) => rendermovieHead(item, index)}
                                bodyData={peliculas.body}
                                renderBody={(item, index) => rendermovieBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>Ver todas</Link>
                        </div>
                    </div>
                </div>


                <div className="col-6">
                    <div className="card">
                        <div className="card__header">
                            <h3>Peliculas ingles recien añadidas</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>Ver todas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
