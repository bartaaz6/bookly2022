import { Component, useState } from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Button, Input, Row, Modal, Form } from 'antd';
import exampleUsers from "../../exampleData/users.json";
import {Typography} from "antd"
import { UserForm } from './UserForm';

const { Title } = Typography;
const { Search } = Input;

interface Props {
    visible : boolean,
    onCancel : Function,
    onConfirm  : Function,
}


export const AddUser: React.FC<Props> = (props: Props) => {
    const [user, setUser] = useState();
    const [form] = Form.useForm();

    const passwordValidate = (password : String) => {
        return password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
    }

    return (
        <UserForm modalTitle="Add new user" visible={props.visible} onCancel={props.onCancel} onConfirm={props.onConfirm} editeduser={null} />
    );
}