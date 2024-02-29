import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const InstagramCharts = ({ usrnamechart, fetchDataOnButtonClick }) => {
  const [instagramData, setInstagramData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.pathsocial.com/wp-admin/admin-ajax.php?action=growth_page_rapid_search&account_handle=${usrnamechart}`
        );
        setInstagramData(response.data);
        // console.log(response);
        setError(false);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
        setError(true);
      }
    };

    if (fetchDataOnButtonClick) {
      fetchData(); 
    }
  }, [usrnamechart, fetchDataOnButtonClick]);

  if (!fetchDataOnButtonClick || !instagramData) {
    return <div style={{ textAlign: 'center'}}>Loading....</div>
  }
  
  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>Error fetching Instagram data</div>;
  }

  // Extract relevant data
  const dates = instagramData.data.dates_lables;
  const date = instagramData.data.date_lables_month;
  const normalFollowersData = instagramData.data.total_followers_graph.normal_followers_increase_data;
  const pathfollow = instagramData.data.total_followers_graph.pathsocial_followers_increase_data;
  const engagementData = instagramData.data.engagement_graph.pathsocial_engagement_increase_data;
  const day = instagramData.data.followers_growth_graph.daliy_increase_number_followers;
  
  // Total Followers Chart Options
  const followersOptions = {
    chart: {
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "smooth",
    },

    chart: {
      type: "area",
      background: "transparent", // Set background color to transparent
      foreColor: "#00CFE8", // Set text color
    },

    chart: {
      type: "line",
    },
    series: [
      {
        name: "Followers",
        data: normalFollowersData,
      },
      {
        name : "Path Social",
        data: pathfollow,
      }
    ],
    xaxis: {
      categories: dates,
    },
    title: {
      text: "Total Followers",
    },
  };

  // Engagement Chart Options
  const engagementOptions = {

    chart: {
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },


    dataLabels: {
      enabled: false,
    },

    colors: ['#FF9F43'],

    style: {
      fontSize: "20px",
      color: "#28BD8A",
    },

    series: [
      {
        name: "Engagement Rate",
        data: engagementData,
      },
    ],
    xaxis: {
      categories: date,
    },
    title: {
      text: "Engagement Rate",
    },
  };

  // Sample Daily Followers
  const sampldailyfollowers = {

    chart: {
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },


    dataLabels: {
      enabled: false,
    },

    colors: ['#F22C27'],

    style: {
      fontSize: "20px",
      color: "#28BD8A",
    },

    series: [
      {
        name: "Engagement Rate",
        data: day,
      },

    ],

    xaxis: {
      categories: date,
    },
    title: {
      text: "Daily Followers",
    },
  };

  return (
    <>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <ReactApexChart
              options={followersOptions}
              series={followersOptions.series}
              type="area"
              height={350}
            />
          </div>
        </div>
      </div>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <ReactApexChart
              options={engagementOptions}
              series={engagementOptions.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <ReactApexChart
              options={sampldailyfollowers}
              series={sampldailyfollowers.series}
              type="line"
              height={350}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramCharts;
