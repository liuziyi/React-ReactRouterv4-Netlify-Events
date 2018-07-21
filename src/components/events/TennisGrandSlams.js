import React from 'react';

const GrandSlams = () => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Tennis Grand Slams</h1>
      <p className="lead">Tennis</p>
    </div>
    <div style={{ padding: '50px' }}>
      <table className="table">
        <thead>
          <tr>
            <th>Grand Slam Tournament</th>
            <th>Dates</th>
            <th>Venue</th>
            <th>Location</th>
            <th>Surface</th>
            <th>Main stadiums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Auatralian Open</td>
            <td>14-27 Jan 2019</td>
            <td>Melbourne Park</td>
            <td>Melbourne, Australia</td>
            <td>Outdoor hard (Plexicushion Prestige)</td>
            <td>Rod Laver Arena and Hisense Arena</td>
          </tr>
          <tr>
            <td>Roland Garros</td>
            <td>27 May - 10 Jun 2018</td>
            <td>Roland Garros</td>
            <td>Paris, France</td>
            <td>Outdoor red clay</td>
            <td>Court Philippe Chatrier and Court Suzanne Lenglen</td>
          </tr>
          <tr>
            <td>Wimbledon</td>
            <td>2-15 July 2018</td>
            <td>The All England Lawn Tennis & Croquet Club</td>
            <td>Wimbledon, London, England</td>
            <td>Outdoor grass</td>
            <td>Centre Court and No. 1 Court</td>
          </tr>
          <tr>
            <td>US Open</td>
            <td>27 Aug - 9 Sep 2018</td>
            <td>Flushing Meadows</td>
            <td>Queens, New York, USA</td>
            <td>Outdoor hard (DecoTurf)</td>
            <td>Arthur Ashe Stadium and Louis Armstrong Stadium</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Source</h2>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.itftennis.com/about/grand-slam®/overview.aspx">
          ITF Tennis
        </a>
      </p>
    </div>
  </div>
);

export default GrandSlams;
