
import { Features } from "./Components/Home/features/Features";
import { Welcomme } from "./Components/Home/Wlecome";
export const App: React.FC = () => {
    
    return (  
        <div>
            <div className="container-fluid">
            <Welcomme/>
            </div> 
            <div className="b-example-divider"></div>
            <div className="container-fluid">
            <Features/> 
            </div>  
        </div>
    );
};

