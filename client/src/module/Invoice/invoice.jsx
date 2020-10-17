import { Table } from 'antd';
import React from 'react';

const Invoice = () => {
    return (
        <>
            <div className="container-fluid wrapper">
                <h1>Invoices</h1>
                <div className="card p-5">
                    <table className="border">
                        <tr>
                            <td colspan="2" align="center">
                                <h2>Create Invoice</h2>
                                <h4>Address</h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )

}

export default Invoice;