import {Button, Form, Input} from "antd";
import React from "react";
import EditButton from "./EditButton";

const RegisterForm = (props) => {
    return props.editable?
        null
        :
        <Form
            layout="inline"
        >
            <Form.Item name={['user', 'name']} label="Username" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={props.showModal}>
                    Register
                </Button>
            </Form.Item>
        </Form>
}


export default RegisterForm;