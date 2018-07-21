import React, { Component } from "react";
import axios from "axios";

class UserDetails extends Component {
  constructor(){
		super();
		this.state = {
			user: []
		}
	}

  componentWillMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        user: res.data
      })
    })
    .catch(err => alert(err));
	}

  render(){
    return(
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">{this.state.user.name}</h1>
          <div style={{ marginTop: '50px' }}>
            <p className="lead">{this.state.user.phone}</p>
            <p className="lead">{this.state.user.email}</p>
            <p className="lead">{this.state.user.website}</p>
          </div>
      </div>
    )
  }

}

export default UserDetails;
