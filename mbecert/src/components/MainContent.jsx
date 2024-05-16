import { useDispatch, useSelector } from "react-redux";

import BusinessDesc from "./BusinessDesc";
import BusinessInfo from "./BusinessInfo";
import GeneralInfo from "./GeneralInfo";
import References from "./References";
import ManageControl from "./ManageControl";

function MainContent() {

    const { sideBar, formToDisplay } = useSelector((store) => store.displayPage)

    return (
        <div className="basis-3/4 pr-4 overflow-x-hidden h-full w-full">
            {(sideBar === "General Info") && <GeneralInfo />}
            {(sideBar === "Business Info") && <BusinessInfo />}
            {(sideBar === "Management Control") && <ManageControl />}
            {(sideBar === "Business Desc") && <BusinessDesc />}
            {(sideBar === "References") && <References />}
        </div>
    )
}

export default MainContent;
