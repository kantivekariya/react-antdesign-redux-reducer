import React from 'react';
import { Card, Input, Form, DatePicker, Button, Col, Row, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from 'moment';
import { salesItem } from '../../redux/actions/sales/sales.action';
const FormItem = Form.Item;

const Sales = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch();

    const handleTotal = (_, values) => {
        console.log("values", values)
        if (values) {
            const rowsCopy = [...values.users]
            values.users.forEach((fieldGroup, index) => {
                if (fieldGroup && fieldGroup.qty && fieldGroup.rate) {
                    fieldGroup.total = fieldGroup.qty * fieldGroup.rate
                    rowsCopy.splice(index, 1, fieldGroup)
                    form.setFieldsValue({ users: rowsCopy })
                }
            })
        }
    }

    const onFinish = values => {
        console.log(values);
        dispatch(salesItem(values))
        .then((res) => {
            notification.success({
                message: 'Success',
                description: 'Success',
            });
        })
        .catch((err) => {
            console.log('userLogin err', err);
        });
    };
    return (
        <div className="container-fluid wrapper">
            <Card title="Create Invoice">
                <Form
                    onFinish={onFinish}
                    onValuesChange={handleTotal}
                    form={form}
                    // initialValues={{ invoiceDate: moment() }}
                    >
                    <div className="row">
                        <div className="d-flex p-3">
                            <Col>
                                <label className="form-group">Customer Name</label>
                                <FormItem name="cmsName" rules={[{ required: true, message: 'Customer Name is required!' }]}>
                                    <Input className="form-control" placeholder="Customer Name" />
                                </FormItem>
                            </Col>
                            <Col className="ml-5">
                                <label className="form-group">Invoice Date</label>
                                <FormItem className="form-group" name="invoiceDate" rules={[{ required: true, message: 'Invoice Date is required!' }]}>
                                    <DatePicker format={'MM-DD-YYYY'} placeholder="Invoice Date" className="form-control" />
                                </FormItem>
                            </Col>
                            <Col className="ml-5">
                                <label className="form-group">Invoice #</label>
                                <FormItem className="form-group" name="invoiceNo" rules={[{ required: true, message: 'Invoice no is required!' }]}>
                                    <Input className="form-control" placeholder="Invoice" />
                                </FormItem>
                            </Col>
                        </div>
                    </div>
                    <div className="row">
                        <div className="p-3">

                            <Form.List name="users">
                                {(fields, { add, remove }) => {
                                    return (
                                        <div>
                                            {fields.map((field, index) => (
                                                <Row key={field.key} >
                                                    <Col className="ml-1">
                                                        <label className="form-group">Item</label>
                                                        <Form.Item
                                                            {...field}
                                                            name={[field.name, "item"]}
                                                            fieldKey={[field.fieldKey, "item"]}
                                                            rules={[{ required: true, message: 'is required!' }]}
                                                        >
                                                            <Input className="form-control" placeholder="Item" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col className="ml-1">
                                                        <label className="form-group">Description</label>
                                                        <Form.Item
                                                            {...field}
                                                            name={[field.name, "desc"]}
                                                            fieldKey={[field.fieldKey, "desc"]}
                                                            rules={[{ required: true, message: 'is required!' }]}
                                                        >
                                                            <Input className="form-control" placeholder="Desc" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col className="ml-1">
                                                        <label className="form-group">Qty</label>
                                                        <Form.Item
                                                            {...field}
                                                            name={[field.name, "qty"]}
                                                            fieldKey={[field.fieldKey, "qty"]}
                                                            rules={[{ required: true, message: 'is required!' }]}
                                                        >
                                                            <Input className="form-control" placeholder="Qty" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col className="ml-1">
                                                        <label className="form-group">Rate</label>
                                                        <Form.Item
                                                            {...field}
                                                            name={[field.name, "rate"]}
                                                            fieldKey={[field.fieldKey, "rate"]}
                                                            rules={[{ required: true, message: 'is required!' }]}
                                                        >
                                                            <Input className="form-control" placeholder="Rate" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col className="ml-1">
                                                        <label className="form-group">Total</label>
                                                        <Form.Item
                                                            {...field}
                                                            name={[field.name, "total"]}
                                                            fieldKey={[field.fieldKey, "total"]}
                                                            rules={[{ required: true, message: 'is required!' }]}
                                                        >
                                                            <Input className="form-control" placeholder="Total" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col className="ml-4" style={{ marginTop: '45px' }} flex="none">
                                                        <MinusCircleOutlined
                                                            className="dynamic-delete-button"
                                                            onClick={() => {
                                                                remove(field.name);
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                            ))}
                                            <Form.Item>
                                                <Button type="primary" size={'large'}
                                                    onClick={() => {
                                                        add();
                                                    }}
                                                >
                                                    <PlusOutlined /> Add item
                                                </Button>
                                            </Form.Item>
                                        </div>
                                    );
                                }}
                            </Form.List>
                        </div>
                    </div>
                    <div className="com-md-12 text-right">
                        <Button type="primary" className="mr-3" size="large" htmlType="submit">
                            Save
                        </Button>
                        <Button type="primary" size="large" onClick={() => window.print()}>
                            Print
                        </Button>
                    </div>
                </Form>

            </Card>
        </div >
    )
}
export default Sales;