import { Helmet, HelmetProvider } from "react-helmet-async";

function ErrorPage() {
  return (
    <div>
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
      error page
    </div>
  )
}

export default ErrorPage;
