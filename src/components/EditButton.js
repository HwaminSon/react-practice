import {Button} from "antd";
import React from "react";
import UserListTable from "./UserListTable";

const EditButton = (props) => {
    return props.editable ?
        <>
            <Button type="primary" onClick={props.showModal}>
                Confirm
            </Button>
            <Button type="primary" onClick={props.toggle}>
                Cancel
            </Button>
        </>
        :
        <Button type="primary" onClick={props.toggle}>
            Edit
        </Button>
}


export default EditButton;