import React from 'react';

const Majors = () => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">The Majors</h1>
      <p className="lead">Golf</p>
    </div>
    <div style={{ padding: '50px' }}>
      <table className="table">
        <thead>
          <tr>
            <th>Tournament</th>
            <th>Dates</th>
            <th>Venue</th>
            <th>Prize Money</th>
            <th>Defending Champion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Masters</td>
            <td>April 5 - 8</td>
            <td>Augusta National Golf Club, USA</td>
            <td>$11,000,000 USD</td>
            <td>Sergio Garcia (ESP)</td>
          </tr>
          <tr>
            <td>US Open</td>
            <td>June 14 - 17</td>
            <td>Shinnecock Hills GC, Southampton, New York </td>
            <td> $12,000,000 USD</td>
            <td>Brooks Koepka (USA)</td>
          </tr>
          <tr>
            <td>The Open</td>
            <td>July 19 - 22</td>
            <td>Carnoustie Golf Links, Carnoustie, Scotland</td>
            <td>$10,250,000 USD</td>
            <td>Jordan Spieth (USA)</td>
          </tr>
          <tr>
            <td>PGA Championship</td>
            <td>August 9 - 12</td>
            <td>FBellerive CC, St. Louis, Missouri</td>
            <td>$10,500,000 USD</td>
            <td>Justin Thomas (USA)</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Source</h2>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.pga.org.au/tourns/majors">
          PGA Australia, 2018 Schedule 
        </a>
      </p>
    </div>
  </div>

);

export default Majors;
