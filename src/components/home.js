import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanies } from '../redux/companySlice';
import '../styles/home.css';
import Navbar from './Navbar';

const MyHome = () => {
  const [filterText, setFilterText] = useState('');
  const companies = useSelector(
    (state) => state.companies.filter(
      (company) => company.name.toLowerCase().includes(filterText.toLowerCase()),
    ),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <div className="homeContainer">
      <Navbar />
      <div className="intro">

        <div className="text-cont">
          <h1>
            <span className="title">Fortune 100</span>
            <br />
            <span className="year">Year 2009</span>
          </h1>
        </div>
      </div>
      <div>
        <div className="filter">
          <div className="filter-container">
            <input type="text" placeholder="Filter by name" className="filter-input" value={filterText} onChange={handleFilterTextChange} />
          </div>
        </div>
        <div className="content">
          {companies.map((company) => (
            <NavLink to={`details/${company.name}`} className="list-item" key={company.id}>
              <div className="info-container">
                <p className="title">{company.name}</p>
                <p className="revenue">
                  Revenue: $
                  {company.revenue}
                  M
                </p>
                <p><FontAwesomeIcon icon={faArrowRight} className="arrow-right" /></p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyHome;
