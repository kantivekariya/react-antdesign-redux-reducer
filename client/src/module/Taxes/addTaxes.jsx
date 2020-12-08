import React, { useEffect, useRef } from 'react';
import { Form, Input, Modal, Select } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
    console.log(visible)
    const prevVisibleRef = useRef();
    useEffect(() => {
        prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
        console.log(!visible && prevVisible)
        if (!visible && prevVisible) {
            form.resetFields();
        }
    }, [visible]);
};

export const AddTaxes = (props) => {
    const [form] = Form.useForm();
    const { visible, onCreate, onCancel, rowRecord } = props;

    useResetFormOnCloseModal({
        form,
        visible,
    });

    let pageTitle;
    if (rowRecord) {
        console.log(rowRecord)
        pageTitle = 'Edit Taxes';
    } else {
        pageTitle = 'Add Taxes';
    }

    const handleSubmit = (value) => {
        console.log('Received values of form: ', value);
        // onCreate(value);
        // form.resetFields();
        // form.validateFields((err, values) => {
        //     if (err) {
        //         return;
        //     }
        //     console.log('Received values of form: ', values);
        //     form.resetFields();
        // });
    };
    return (
        <>
            <Modal
                visible={visible}
                width={640}
                footer={false}
                closable={true}
                onCancel={onCancel}>
                <div className="p-2 mx-2">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h4 className="mb-4">{pageTitle}</h4>
                            <Form onFinish={handleSubmit} name="modal" form={form} initialValues={{ taxName: rowRecord ? rowRecord.taxName : null, taxRate: rowRecord ? rowRecord.taxRate : null, taxType: rowRecord ? rowRecord.taxType : 'Select Type' }}>
                                <FormItem className="form-group pt-4" name="taxName" rules={[{ required: true, message: 'Tax Name is required!' }]}>
                                    <Input className="form-control" placeholder="Tax Name" />
                                </FormItem>
                                <FormItem className="form-group pt-4" name="taxRate" rules={[{ required: true, message: 'Tax Rate is required!' }]}>
                                    <Input className="form-control" placeholder="Tax Rate" />
                                </FormItem>
                                <FormItem className="form-group pt-4" name="taxType" rules={[{ required: true, message: 'Tax Type is required!' }]}>
                                    <Select className="default-select">
                                        <Option value="sales">Sales</Option>
                                        <Option value="purchase">Purchase</Option>
                                        <Option value="both">Both</Option>
                                    </Select>
                                </FormItem>
                                <FormItem className="mt-4">
                                    <button className="add-tax btn btn-secondary" type="submit">Add Tax</button>
                                </FormItem>
                                <pre></pre>
                            </Form>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
