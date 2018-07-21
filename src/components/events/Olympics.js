import React from 'react';

const Olympics = () => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Olympics</h1>
      <p className="lead">Sports</p>
    </div>
    <div style={{ padding: '50px' }}>
      <table className="table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Global TV Audience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2016 Rio</td>
            <td>3.2 Billion</td>
          </tr>
          <tr>
            <td>2012 London</td>
            <td>3.64 Billion</td>
          </tr>
          <tr>
            <td>2008 Beijing</td>
            <td>3.55 Billion</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Source</h2>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.statista.com/statistics/280502/total-number-of-tv-viewers-of-olympic-summer-games-worldwide/">
          Olympic Summer Games total global TV audience in 2008 and 2016 (in billions)*
        </a>
      </p>
    </div>
  </div>
);

export default Olympics;
