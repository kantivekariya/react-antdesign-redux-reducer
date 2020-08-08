import React from 'react';
import { Button } from 'antd';

const ButtonComponent = (props) => {
    console.log("props", props)
    return (
        <>
            <Button
                htmlType={props.type}
                className="btn btn-secondary">
                {props.btnName}
            </Button>
        </>
    )
}

export default ButtonComponent;