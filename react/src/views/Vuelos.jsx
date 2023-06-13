import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";


export default function Vuelos() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);


    const getUsers = () => {
        axiosClient.get("/vuelos")
            .then(({data}) => {
                setLoading(false);
                console.log(data);
            })
            .catch(() => {
                setLoading(false);
            })
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Vuelos</h1>
                <Link to= "/vuelos/new" className="btn-add">Vuelos</Link>
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
                </table>
            </div>
        </div>
    )
}
