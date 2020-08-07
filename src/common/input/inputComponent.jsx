import React from 'react';
import { Input } from 'antd';

const InputComponent = (props) => {
    const { placeholder } = props;
    const onChange = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <>
            <Input
                type={props.type}
                onChange={onChange}
                className="form-control"
                placeholder={placeholder}
            />
        </>
    )
};

export default InputComponent;