import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Users extends Component {
  constructor(){
		super();
		this.state = {
			users: []
		}
	}

  componentWillMount(){
		this.getUsers();
	}

  getUsers(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res.data)
      this.setState({
        users: res.data
      })
    })
    .catch(err => alert(err));
  }

  render(){
    const user = this.state.users.map(user => {
      // console.log('USER ', user)
      return (
        <li className="list-group-item" key={user.id}>
          <Link to={`users/${user.id}`}>{user.name}</Link>
        </li>
      )
    });

    return(
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Users</h1>
        </div>
        <ul className="list-group" style={{ paddingTop: '20px', paddingLeft: '100px', paddingRight: '100px' }}>
          {user}
        </ul>
      </div>
    )
  }
}

export default Users;
