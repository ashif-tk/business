import React from 'react';
import { 
  HiOutlineCollection, 
  HiOutlineGlobe, 
  HiOutlineUserGroup, 
  HiOutlineBadgeCheck 
} from 'react-icons/hi';

const Stats = () => {
  // Demo stat data with modern icon mapping
  const statsList = [
    {
      value: "10+",
      label: "Product Categories",
      description: "Spices, Agriculture, Textiles, Machinery & More",
      icon: <HiOutlineCollection />
    },
    {
      value: "15+",
      label: "Global Markets",
      description: "GCC, Southeast Asia, Europe, & Americas",
      icon: <HiOutlineGlobe />
    },
    {
      value: "50+",
      label: "Business Partners",
      description: "Verified international distributors & importers",
      icon: <HiOutlineUserGroup />
    },
    {
      value: "100+",
      label: "Successful Deals",
      description: "Consistently delivered with full documentation",
      icon: <HiOutlineBadgeCheck />
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-card-container">
          <div className="stats-grid">
            {statsList.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-details">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-desc">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
