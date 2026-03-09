import '../Style/Scroll.css'
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Scroll(){
    return(
        <>
            <div className="scroll-parent">
                <div className="scroll">
                    <p className='scroll-des'>SCROLL</p>
                    <FaAngleDoubleDown className='scroll-icon' size={20} />
                </div>
            </div>
        </>
    );
}
