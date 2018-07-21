import React from "react";
import { Route, Switch, Link } from 'react-router-dom';

import One from './countries/One';
import Two from './countries/Two';
import Three from './countries/Three';
import Four from './countries/Four';
import Five from './countries/Five';

const Countries = ({match}) => (
  <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

    <h1 className="display-4" style={{ marginBottom: '50px' }}>Countries</h1>
    <Switch>
      <Route path={`${match.path}`} component={One} exact/>
      <Route path={`${match.path}/2`} component={Two} />
      <Route path={`${match.path}/3`} component={Three} />
      <Route path={`${match.path}/4`} component={Four} />
      <Route path={`${match.path}/5`} component={Five} />
    </Switch>

    <nav aria-label="Page navigation example" style={{ paddingTop: '20px' }}>
      <ul className="pagination justify-content-center">
        <li className="page-item"><Link className="page-link" to={`${match.url}`}>1</Link></li>
        <li className="page-item"><Link className="page-link" to={`${match.url}/2`}>2</Link></li>
        <li className="page-item"><Link className="page-link" to={`${match.url}/3`}>3</Link></li>
        <li className="page-item"><Link className="page-link" to={`${match.url}/4`}>4</Link></li>
        <li className="page-item"><Link className="page-link" to={`${match.url}/5`}>5</Link></li>
      </ul>
    </nav>

  </div>
)

export default Countries;
