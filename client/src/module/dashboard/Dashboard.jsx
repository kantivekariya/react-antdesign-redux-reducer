import React from 'react';
import { Table } from 'antd';

const Dashboard = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <>
            <div className="container-fluid wrapper">
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <h2 className="page-title">Dashboard</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Dashboard;