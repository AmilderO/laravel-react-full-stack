import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";


export default function Vuelos() {
    const [users, setUsers] = useState(null);
    const [vuelos, setVuelos] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
            .then(({ data }) => {
                console.log("entro")
                setLoading(false)
                setVuelos(data.data)
            })
            .catch(() => {
                console.log("no entro")
                setLoading(false)
            })
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Vuelos</h1>
                <Link to= "/users/new" className="btn-add">Vuelos</Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>fecha_vuelo</th>
                            <th>hora_salida</th>
                            <th>hora_llegada</th>
                            <th>duracion_trayecto</th>
                            <th>tipo_trayecto</th>
                            <th>costo_vuelo</th>
                        </tr>
                    </thead>
                    <body>
                    {vuelos.map(u => (
                        <tr key={u}>
                            <td>{u.id}</td>
                            <td>{u.hora_salida}</td>
                            <td>{u.hora_llegada}</td>
                            <td>{u.duracion_trayecto}</td>
                            <td>{u.tipo_trayecto}</td>
                            <td>{u.costo_vuelo}</td>
                        </tr>

                    ))}
                    </body>
                </table>
            </div>
        </div>
    )
}
