import React, { useEffect, useRef, useState } from 'react';
import { Button, Table, Tooltip, Modal } from 'antd';
import Icon from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addTax, deleteTaxesById, getAllTaxes } from '../../redux/actions/taxes/taxes.action';
import { AddTaxes } from './addTaxes';
const { confirm } = Modal;

const Taxes = () => {
    const taxes = useSelector((state) => state.taxesReducer.taxes);
    const isFirstRender = useRef(true);
    const [isShowing, setState] = useState(false);
    const [isRecord, setRecord] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFirstRender.current) {
            dispatch(getAllTaxes()).then((res) => {
                isFirstRender.current = false;
            });
        }
    }, [taxes, isShowing]);
    
    const showModal = () => {
        setRecord(null);
        setState(!isShowing);
    };

    const editShowModal = (records) => {
        setRecord(records);
        setState(!isShowing);
    };

    const handleSubmit = async (data) => {
        dispatch(addTax(data)).then((res) => {
            isFirstRender.current = true;
            setState(!isShowing);
        })
    };

    const handleCancel = () => {
        setState(!isShowing);
    };



    const deleteSingleItem = (taxId, taxName) => {
        confirm({
            title: `Are you sure to delete ${taxName} Tax ?`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(deleteTaxesById(taxId))
                    .then((res) => {
                        isFirstRender.current = true;
                    })
                    .catch((err) => {
                        console.log('deleteSelectedItem error', err);
                    });
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

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
        {
            title: 'action',
            dataIndex: 'action',
            render: (tags, row) => {
                return (
                    <span className="justify-content-center">
                        <Tooltip placement="top" title={`Edit`}>
                            <Icon
                                className="mx-2 cursor-pointer"
                                onClick={() => editShowModal(row)}
                                component={() => <img alt="Edit" className="action-icon" src={require('../../assets/images/edit.svg')} />}
                            />
                        </Tooltip>
                        <Tooltip placement="top" title={`Delete`}>
                            <Icon
                                className="mx-2 cursor-pointer"
                                onClick={() => deleteSingleItem(row._id, row.taxName)}
                                component={() => <img alt="delete" className="action-icon" src={require('../../assets/images/delete.svg')} />}
                            />
                        </Tooltip>
                    </span>
                )
            }
        }
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
                            rowKey={(data) => data._id}
                            dataSource={taxes.data}
                            columns={columns} />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Taxes;