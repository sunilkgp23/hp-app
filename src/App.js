import React, { Component } from 'react';
import './App.css';

import Notification from './components/Notification/Notification';

class App extends Component {

  // This is the list of Notifications, Handler are added for each notification, upon click it will also be triggered
  state = {
    notifications: [
      { id: "1", title: 'Notification 1', content: 'More Info about notification', readStatus: "unread", action: (obj) => { alert("Action for :" + obj.title) } },
      { id: "2", title: 'Notification 2', content: 'More Info about notification', readStatus: "unread", action: (obj) => { alert("Action for :" + obj.title) } },
      { id: "3", title: 'Notification 3', content: 'More Info about notification', readStatus: "unread", action: (obj) => { alert("Action for :" + obj.title) } },
      { id: "4", title: 'Notification 4', content: 'More Info about notification', readStatus: "unread", action: (obj) => { alert("Action for :" + obj.title) } },
      { id: "5", title: 'Notification 5', content: 'More Info about notification', readStatus: "unread", action: (obj) => { alert("Action for :" + obj.title) } },
      { id: "6", title: 'Notification 6', content: 'More Info about notification', readStatus: "read", action: (obj) => { alert("Action for :" + obj.title) } },
      { id: "7", title: 'Notification 7', content: 'More Info about notification', readStatus: "unread", action: (obj) => { alert("Action for :" + obj.title) } },
      { id: "8", title: 'Notification 8', content: 'More Info about notification', readStatus: "unread", action: (obj) => { alert("Action for :" + obj.title) } },
      { id: "9", title: 'Notification 9', content: 'More Info about notification', readStatus: "unread", action: (obj) => { alert("Action for :" + obj.title) } },
      { id: "10", title: 'Notification 10', content: 'More Info about notification', readStatus: "unread", action: (obj) => { alert("Action for :" + obj.title) } },
    ]
  }
  render() {
    return (
      <div className="">
        <nav className='app-navbar'>
          <ul className='nav-list'>
            <li>Home</li>
            <li><Notification notifications={this.state.notifications}></Notification></li>
          </ul>
        </nav>
        <div id="mainBody" className='main-body'>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium impedit quas ratione quis ab repellat, tempore assumenda et reprehenderit inventore? Distinctio eius soluta corporis et accusantium nam! Rem, hic magnam.
        </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium impedit quas ratione quis ab repellat, tempore assumenda et reprehenderit inventore? Distinctio eius soluta corporis et accusantium nam! Rem, hic magnam.
        </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium impedit quas ratione quis ab repellat, tempore assumenda et reprehenderit inventore? Distinctio eius soluta corporis et accusantium nam! Rem, hic magnam.
        </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium impedit quas ratione quis ab repellat, tempore assumenda et reprehenderit inventore? Distinctio eius soluta corporis et accusantium nam! Rem, hic magnam.
        </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium impedit quas ratione quis ab repellat, tempore assumenda et reprehenderit inventore? Distinctio eius soluta corporis et accusantium nam! Rem, hic magnam.
        </div>
        </div>
      </div>

    );
  }
}

export default App;
