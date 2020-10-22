import { Button, Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTaxes } from '../../redux/actions/taxes/taxes.action';
import { AddTaxes } from './addTaxes';

const Taxes = () => {
    const taxes = useSelector((state) => state.taxesReducer.taxes);
    const isFirstRender = useRef(true);
    const [isShowing, setState] = useState(false);
    const [isRecord, setRecord] = useState(null);
    const dispatch = useDispatch();

    const showModal = () => {
        console.log("work")
        setRecord(null);
        setState(!isShowing);
    };

    const editShowModal = (records) => {
        setRecord(records);
        setState(!isShowing);
    };

    const handleSubmit = (data) => {
        console.log("handleSubmit", data)
        setState(!isShowing);
    };

    const handleCancel = () => {
        setState(!isShowing);
    };

    useEffect(() => {
        if (isFirstRender.current) {
            dispatch(getAllTaxes()).then((res) => {
                isFirstRender.current = false;
            });
        }
        // eslint-disable-next-line
    }, []);


    const columns = [
        {
            title: 'Tax Name',
            dataIndex: 'taxName',
            key: '1',
        },
        {
            title: 'Tax Rate',
            dataIndex: 'taxRate',
            key: '2',
        },
        {
            title: 'Tax Type',
            dataIndex: 'taxType',
            key: '3',
        },
    ];
    return (
        <>
            <div className="container-fluid wrapper">
                <div className="row">
                    <div className="col-md-8 mb-2">
                        <h2 className="page-title">Taxes</h2>
                    </div>
                    <div>
                        <AddTaxes visible={isShowing} onCreate={handleSubmit} onCancel={handleCancel} rowRecord={isRecord} />
                    </div>
                    <div className="col-md-4 mb-2 text-right">
                        <Button type="primary" size={'large'} onClick={showModal}>
                            Add Tax
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Table
                            rowKey={(record) => record.id}
                            dataSource={taxes.data}
                            columns={columns} />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Taxes;