import React from 'react';
import { Form, Modal, Select } from 'antd';
import InputComponent from '../../common/input/inputComponent';
const FormItem = Form.Item;
const { Option } = Select;

export const AddTaxes = (props) => {
    // const [form] = Form.useForm();
    const { visible, onCreate, onCancel, rowRecord } = props;

    let pageTitle;
    if (rowRecord) {
        pageTitle = 'Edit Taxes';
    } else {
        pageTitle = 'Add Taxes';
    }

    const handleSubmit = (value) => {
        onCreate(value);
    };
    return (
        <>
            <Modal visible={visible} width={640} footer={false} closable={true} onCancel={onCancel}>
                <div className="p-2 mx-2">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h4 className="mb-4">{pageTitle}</h4>
                            <Form onFinish={handleSubmit} initialValues={{ taxName: '', taxRate: '' }}>
                                <FormItem className="form-group pt-4" name="taxName" rules={[{ required: true, message: 'Tax Name is required!' }]}>
                                    <InputComponent placeholder="Tax Name" />
                                </FormItem>
                                <FormItem className="form-group pt-4" name="taxRate" rules={[{ required: true, message: 'Tax Rate is required!' }]}>
                                    <InputComponent placeholder="Tax Rate" />
                                </FormItem>
                                <FormItem className="form-group pt-4" name="taxType" rules={[{ required: true, message: 'Tax Type is required!' }]}>
                                    <Select placeholder="Select Type" className="default-select">
                                        <Option value="sales">Sales</Option>
                                        <Option value="purchase">Purchase</Option>
                                        <Option value="both">Both</Option>
                                    </Select>
                                </FormItem>
                                <FormItem className="mt-4">
                                    <button className="add-tax btn btn-secondary" type="submit">Add Tax</button>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
