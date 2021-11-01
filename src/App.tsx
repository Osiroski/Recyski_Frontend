
import { Features } from "./Components/Home/features/Features";
import { Welcomme } from "./Components/Home/Wlecome";
export const App: React.FC = () => {
    
    return (  
        <div>
            <div className="container-fluid">
            <Welcomme/>
            </div> 
            <div className="b-example-divider"></div>
            <div className="container-fluid my-3 " style={{alignContent:"center"}}>
                <div className="my-4">
            <Features 
                        data_aos={"flip-left"}
                        data_aos_easing={"ease-out-cubic"}
                        data_heading_aos={"fade-up"}
                        data_aos_anchor_placement={"center-bottom"}
                        zoom={"zoomBIn"} heading={{
                            title: "Recycling Goes Digital",
                            muted: "Using the digital space to improve our Ecosystem.",
                            text: "See how you can participate in improving the Ecosystem by creating value out of everyday trash 🗑."
                        }}/> 
            </div>
            <Features 
                    data_aos={"zoom-out-right"}
                    data_aos_easing={"ease-out-cubic"}
                    data_heading_aos={"fade-up"}
                    data_aos_anchor_placement={"center-bottom"}
                    zoom={"recycle"} heading={{
                        title: "Vist Recycling depots near you.",
                        muted: "",
                        text: "All you have to do is place a request, drop your trash and walk out...rewarded obviously."
                    }}/> 
            <div className="my-4">
            <Features 
                        data_aos={"fade-up"}
                        data_aos_easing={"ease-out-cubic"}
                        data_heading_aos={"flip-left"}
                        data_aos_anchor_placement={"center-bottom"}
                        zoom={"money"} heading={{
                            title: "$12 million stuck up in trash. ",
                            muted: "The average Kenyan disposes waste that has an average 45% recycle value.",
                            text: "From vegetable waste to saw dust, there is no need to waste that waste. Recycski is a platform that connects you to the recycling market."
                        }}/>
            </div> 
            </div>  
        </div>
    );
};

