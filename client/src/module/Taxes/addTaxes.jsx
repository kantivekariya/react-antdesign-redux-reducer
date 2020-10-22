import React from 'react';
import { Form, Modal, Select } from 'antd';
import InputComponent from '../../common/input/inputComponent';
import ButtonComponent from '../../common/button/Button';
const FormItem = Form.Item;
const { Option } = Select;

export const AddTaxes = (props) => {
    // const [form] = Form.useForm();
    const { visible, onCreate, onCancel, form, rowRecord } = props;

    let pageTitle;
    if (rowRecord) {
        pageTitle = 'Edit Taxes';
    } else {
        pageTitle = 'Add Taxes';
    }

    const handleSubmit = (value) => {
        console.log("Form Values", value);
        onCreate(value);
    };
    return (
        <>
            <Modal visible={visible} width={640} footer={false} closable={true} onCancel={onCancel}>
                <div className="p-2 mx-2">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h4 className="mb-4">{pageTitle}</h4>
                            <Form onFinish={handleSubmit}>
                                <FormItem className="form-group pt-4" name="taxname" rules={[{ required: true, message: 'Tax Name is required!' }]}>
                                    <InputComponent placeholder="Tax Name" />
                                </FormItem>
                                <FormItem className="form-group pt-4" name="taxrate" rules={[{ required: true, message: 'Tax Rate is required!' }]}>
                                    <InputComponent placeholder="Tax Rate" />
                                </FormItem>
                                <FormItem className="form-group pt-4" name="taxtype" rules={[{ required: true, message: 'Tax Type is required!' }]}>
                                    <Select defaultValue="lucy" className="default-select">
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </FormItem>
                                <FormItem className="mt-4">
                                    <ButtonComponent className="" btnName="Add Tax" type="submit" />
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
