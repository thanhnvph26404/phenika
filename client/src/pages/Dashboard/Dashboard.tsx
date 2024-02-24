import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

const Dashboard = () => {
    const [data, setData] = useState<any>();
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8080/prays",
        }).then((result) => setData(result.data.data)
        );
       
    }, []);
    useEffect(() => {
        console.log(data);
        
    })
    return (
        <div>
            <h2>Danh sách điều ước</h2>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Điều ước</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                 {/* {data.map((item) => )} */}
                    {data && data.map((item: any, index: number) => 
                       ( <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.message}</td>
                            <td>{item.email}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
