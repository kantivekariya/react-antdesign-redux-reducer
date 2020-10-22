import React from 'react';
import { Button } from 'antd';

const ButtonComponent = (props) => {
    console.log(props)
    return (
        <>
            <Button
                onClick={props.onClick ? props.onClick : ''}
                htmlType={props.type}
                className="btn btn-secondary">
                {props.btnName}
            </Button>
        </>
    )
}

export default ButtonComponent;