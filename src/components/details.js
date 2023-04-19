import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const MyDetails = () => {
  const [company, setCompany] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { companyName } = params;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies?filter=${companyName}`);
        setCompany(response.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [companyName]);

  return (
    <div className="details-container">
      <Navbar />
      {isLoading ? (
        <p className="load">Loading...</p>
      ) : (
        company.map((company) => (
          <div key={company.id} className="details-content">
            <div className="company-name">
              <h2>{company.name}</h2>
              <p className="box">
                Fortune 100..
                <span>{company.name}</span>
                ..stats
              </p>
            </div>
            <div className="details-info">
              <p>
                <span>Fortune 100 Rank:</span>
                <span>{company.rank}</span>
              </p>
              <p>
                <span>Year:</span>
                <span>{company.year}</span>
              </p>
              <p>
                <span>Revenue:</span>
                <span>
                  $
                  {company.revenue}
                  M
                </span>
              </p>
              <p>
                <span>Profits:</span>
                <span>
                  $
                  {company.profit}
                  M
                </span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyDetails;
