import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMethane } from "../features/methane/methaneFetchingSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideChart from "../components/sideChart/sideChart";

function Methane() {
  const methane = useSelector(state => state.methane.methane)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMethane())
  }, [])

  console.log(methane)

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Methane</title>
          <meta 
            name="description"
            content="There is no planet B. Since half of 20th century scientists are warning us that human activity is interfering with normal climate change of the planet, and we still haven't done anithing drastic to change things. We put information togheter to help clarifying the situation for everyone who still have doubts. This page is dedicated to the rising of the concentration of methane in the air in the last century and to sensitize people on this theme."
          ></meta>
          <meta 
            name="keywords" 
            content="climate-change methane act-now methane-graph methane-concentration-in-air methane-information"
          ></meta>
        </Helmet>
      </HelmetProvider>
      
      <SideChart
        title="Methane"
        description="In recent years, the concerning escalation of methane levels in the atmosphere has emerged as a pressing issue in the realm of climate change. Methane, a potent greenhouse gas, is garnering increased attention due to its significant contribution to global warming and its intricate connection to human activities and natural processes. <br/>
        The surge in methane concentration stems from various sources, including agricultural practices such as livestock farming and rice cultivation, fossil fuel extraction and distribution, landfill decomposition, and natural processes like wetland emissions. Additionally, the thawing of permafrost due to rising temperatures releases trapped methane, further exacerbating the problem. <br/>
        The implications of heightened methane levels are profound and far-reaching. Methane is roughly 28 times more effective at trapping heat in the atmosphere than carbon dioxide over a 100-year period, intensifying the greenhouse effect and accelerating climate change. Its impact extends beyond merely warming the planet; it also contributes to the depletion of the ozone layer, exacerbating the effects of ultraviolet radiation. <br/>
        Moreover, the interplay between methane emissions and climate change creates a feedback loop, wherein rising temperatures lead to increased methane release, further amplifying global warming—a vicious cycle that poses grave threats to ecosystems, biodiversity, and human well-being.
        Addressing the surge in methane levels necessitates a multi-faceted approach. Implementing methane reduction strategies in key sectors such as agriculture, energy, and waste management is imperative. This includes adopting methane capture and utilization technologies, improving livestock management practices, reducing fossil fuel dependence, and implementing policies that incentivize emission reductions. <br/>
        Furthermore, enhancing monitoring and surveillance of methane sources, investing in research and innovation for methane mitigation strategies, and fostering international cooperation are essential steps towards mitigating the impact of methane emissions on climate change."
        url="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#methane"
        website="www.epa.gov"
      />

    </div>
  )
}

export default Methane;
