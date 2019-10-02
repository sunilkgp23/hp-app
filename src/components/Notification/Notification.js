import React, { Component } from 'react';
import './Notification.css';
import NotificationList from './NotificationList';


class Notification extends Component {

    state = {
        visibility: "none",
        notifications: this.props.notifications
    }


    openDialog = () => {
        let visibility = 'block';
        let mainBody = document.getElementById("mainBody");
        if (this.state.visibility === 'block') {
            visibility = 'none';
            mainBody.style.opacity = 1;
        } else {
            mainBody.style.opacity = 0.3;
        }
        this.setState({
            visibility: visibility
        })
    }

    updateState = (id, isAll) => {
        const newList = this.state.notifications.map((note) => {
            if (note.readStatus === "unread") {
                if (!isAll && note.id === id) {
                    note.readStatus = "read";
                    note.action(note);
                } else if (isAll) {
                    note.readStatus = "read";
                }
            }
            return note;
        })
        this.setState({
            notifications: newList
        })
    }

    render() {
        return (
            <div className='notification-box'>
                Notification Count
               <a className="countMsg" href="#" onClick={this.openDialog}>{this.state.notifications.filter(notify => notify.readStatus === "unread").length}</a>
                <NotificationList notifications={this.state.notifications} visibility={this.state.visibility} updateReadStatus={this.updateState} closeDialog={this.openDialog}></NotificationList>
            </div>
        )
    }
}

export default Notification;
