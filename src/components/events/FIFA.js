import React from 'react';

const FIFA = () => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">FIFA World Cup</h1>
      <p className="lead">Football</p>
    </div>
    <div style={{ padding: '50px' }}>
      <table className="table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Viewers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018 Russia</td>
            <td>3.4 Billion</td>
          </tr>
          <tr>
            <td>2014 Brazil</td>
            <td>3.2 Billion</td>
          </tr>
          <tr>
            <td>2010 South Africa</td>
            <td>3.2 Billion</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ paddingBottom: '20px', paddingTop: '20px' }}>Source</h2>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.hollywoodreporter.com/news/soccer-world-cup-2018-global-audience-hit-34-billion-fifa-revenue-reach-6-billion-1120071">
          Soccer World Cup 2018: Global Audience to Hit 3.4 Billion, FIFA Revenue to Reach $6 Billion
        </a>
      </p>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.fifa.com/worldcup/news/2014-fifa-world-cuptm-reached-3-2-billion-viewers-one-billion-watched--2745519">
          2014 FIFA World Cup™ reached 3.2 billion viewers, one billion watched final
        </a>
      </p>
      <p>
        <i className="fas fa-angle-right"></i><span> </span>
        <a href="https://www.fifa.com/worldcup/news/almost-half-the-world-tuned-home-watch-2010-fifa-world-cup-south-africat-1473143">
          Almost half the world tuned in at home to watch 2010 FIFA World Cup South Africa™
        </a>
      </p>
    </div>
  </div>
);


export default FIFA;
