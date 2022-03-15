import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

function NavTabs() {

  const [pageTab, setPageTab] = useState('habit');

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { data } = useQuery(QUERY_ME);

  return (
    <div className="container-fluid">
      {Auth.loggedIn() ? (

    </div>
  );
}

export default NavTabs;
