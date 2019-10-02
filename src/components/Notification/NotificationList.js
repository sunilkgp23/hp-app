import React, { Component } from 'react';
import './NotificationList.css';

class NotificationList extends Component {
    render() {
        const Notes = this.props.notifications.map((note) => {
            return (
                <li key={note.id} className={note.readStatus === "read" ? 'readMsg' : 'unreadMsg'} onClick={() => this.props.updateReadStatus(note.id, false)}>{note.title}</li>
            )
        })

        return (
            <div id="note-list" className='notification-list' style={{ display: this.props.visibility }}>
                <div>
                    Your Messages <button className="markAllButton" onClick={() => { this.props.updateReadStatus(null, true) }}>Mark All as Read</button>
                    <button className="closeButton" onClick={this.props.closeDialog}> X </button>
                </div>
                <div className='content-box'>
                    <ul className='list-notes'>{Notes}</ul>
                </div>

            </div>
        )
    }
}

export default NotificationList;
