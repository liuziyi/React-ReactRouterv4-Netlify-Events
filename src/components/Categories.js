import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Categories extends Component {
  constructor(){
    super();
    this.state = {
      categories: []
    }
  }

  componentDidMount(){
    this.setState({
      categories: [
        {
          category: 'Football',
          number: '1000'
        },
        {
          category: 'Sports',
          number: '10000'
        },
        {
          category: 'Cricket',
          number: '100'
        },
        {
          category: 'Cycling',
          number: '100'
        },
        {
          category: 'Tennis',
          number: '100'
        }
      ]
    })
  }

  renderCategory(){
    const category = this.state.categories.map(category => {
      return(
        <div className="card" style={{ margin: '20px' }}>
          <img className="card-img-top" src="" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{category.category}</h5>
            <Link to={`categories/${category.category}`} className="btn btn-dark">Details</Link>
          </div>
        </div>
      )
    });

    return category;
  }

  render(){
    return(
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

          <h1 className="display-4">Categories</h1>
          <div className="container" style={{ marginTop: '50px' }}>

            <div className="row">
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Tech</h2>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Sports</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Music</h2>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Film</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/163379/ballet-sneaker-dress-ballet-dancer-163379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Dance</h2>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/768975/pexels-photo-768975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Fashion</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/886465/pexels-photo-886465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Business</h2>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Politics</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Health</h2>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Science</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/59519/pexels-photo-59519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Travel</h2>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/1109352/pexels-photo-1109352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Art</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Food</h2>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/532508/pexels-photo-532508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Family</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="card" style={{ width: '600px', height: '400px' }}>
                  <img
                    style={{ width: '600px', height: '300px' }}
                    className="card-img-top"
                    src="https://images.pexels.com/photos/1083619/pexels-photo-1083619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
                    alt="tech"/>
                  <div className="card-body">
                    <h2 className="card-title">Charity & Causes</h2>
                  </div>
                </div>
              </div>
            </div>

          </div>

      </div>
    )
  }
}

export default Categories;
