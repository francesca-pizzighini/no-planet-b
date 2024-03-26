import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

function ErrorElement({ darkMode }) {
  // const [darkMode] = useState(() => {
  //   const savedDarkMode = localStorage.getItem('darkMode');
  //   return savedDarkMode ? JSON.parse(savedDarkMode) : true;
  // });

  return (
    <div className="error">
        <HelmetProvider>
            <Helmet>
            <title>An error occurred</title>
            <meta 
                name="description"
                content="En error occurred in the loading of the page, try reloading. If the problem you can contact us"
            ></meta>
            <meta 
                name="keywords" 
                content="error climate-change temperature co2 carbon-dioxide methane no2 nitrous-oxide polar-ice ocean-temperature ocean-warming act-now graphs information"
            ></meta>
            </Helmet>
        </HelmetProvider>

        <div>
          <h2>An error occurred</h2>

          <p>We are very sorry for the inconvenience, you can try reloading the homepage clicking <Link to="/">here</Link> or just go seeing the data clicking <Link to="/data/temperature">here</Link>.
          </p> 

          <p>If the error persist contact us <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfcwvZ8XLDIXgPeI0yxP4cKEKYY1_4wM_SkdiXy63kxNJqZug/viewform?usp=sf_link">here</a>.</p>
        </div>
    </div>
  )
}

export default ErrorElement;
