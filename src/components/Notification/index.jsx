import React from 'react'
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

const Notification = () => {

    const notification = useSelector(state => state.general.notification);

    if (!notification.type) {
        return null;
    }

    return (
        <Alert variant={notification.type} className="my-3">
            {notification.message}
        </Alert>
    )
}

Notification.displayName = 'Notification';
export default Notification;