import React from 'react';
import { Form, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputComponent from '../common/input/inputComponent';
import ButtonComponent from '../common/button/Button';
import { Link } from 'react-router-dom';
import { userSignup } from '../redux/actions/auth/authentication';
import { useEffect } from 'react';

const FormItem = Form.Item;

const Registration = () => {
    
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const onFinish = (values) => {
        dispatch(userSignup(values))
            .then((res) => {
                notification.success({
                    message: 'Signup Success',
                    description: 'Signup Success',
                });

                // Routing After Signup Success
                history.push('/login');
            })
            .catch((err) => {
                console.log('checkUserSignup err', err);
            });
    }
    return (
        <>
            <div className="auth d-md-flex align-items-center register-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-6 auth-right bg-white">
                            <h2 className="text-primary h4 text-center">Registration</h2>
                            <Form form={form} name="form" onFinish={onFinish}>
                                <div className="row">
                                    <FormItem className="form-group col-md-12 pt-4" name="name" rules={[{ required: true, message: 'Your Name is required!' }]}>
                                        <InputComponent placeholder="Your Name" />
                                    </FormItem>
                                    <FormItem className="form-group col-md-12 pt-4" name="email" rules={[{ required: true, message: 'Email is required!' }]}>
                                        <InputComponent placeholder="Email" />
                                    </FormItem>
                                    <FormItem className="form-group col-md-12 pt-4" name="password" rules={[{ required: true, message: 'Password is required!' }]}>
                                        <InputComponent placeholder="Password" type="password" />
                                    </FormItem>
                                    <FormItem className="form-group col-md-12 pt-4 pb-4" name="confirmpwd" rules={[{ required: false, message: 'Repeat Password is required!' }]}>
                                        <InputComponent placeholder="Repeat Password" type="password" />
                                    </FormItem>
                                    <FormItem className="col-md-12 mt-4 text-center">
                                        <ButtonComponent btnName="Registration" type="submit" />
                                    </FormItem>
                                </div>
                            </Form>
                            <p className="text-center">Have already an account?<Link to={`/login`} className="ml-1 pt-3">Login Here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Registration;