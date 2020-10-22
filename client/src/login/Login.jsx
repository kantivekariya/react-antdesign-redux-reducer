import React, { useEffect } from 'react';
import { Form, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import InputComponent from '../common/input/inputComponent';
import ButtonComponent from '../common/button/Button';
import { userLogin } from '../redux/actions/auth/authentication';

const FormItem = Form.Item;

const Login = (props) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.isAuthenticated) {
            props.history.push('/home');
        }
    })

    const onFinish = (values) => {
        dispatch(userLogin(values))
            .then((res) => {
                notification.success({
                    message: 'Login Success',
                    description: 'Login Success',
                });
                props.history.push('/home');
            })
            .catch((err) => {
                console.log('userLogin err', err);
            });
    }

    return (
        <>
            <div className="auth d-md-flex align-items-center register-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-6 auth-right bg-white">
                            <h2 className="text-primary h4 text-center">Login</h2>
                            <Form form={form} name="form" onFinish={onFinish}>
                                <div className="row">
                                    <FormItem className="form-group col-md-12 pt-4" name="email" rules={[{ required: true, message: 'Email is required!' }]}>
                                        <InputComponent placeholder="Email" />
                                    </FormItem>
                                    <FormItem className="form-group col-md-12 pt-4 pb-4" name="password" rules={[{ required: true, message: 'Passowrd is required!' }]}>
                                        <InputComponent placeholder="Password" type="password" />
                                    </FormItem>
                                    <FormItem className="col-md-12 mt-4">
                                        <ButtonComponent btnName="Login" type="submit" />
                                    </FormItem>
                                </div>
                            </Form>
                            <p className="text-center">Don't have an account ?<Link to={`/register`} className="ml-1 pt-3">Create One</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;