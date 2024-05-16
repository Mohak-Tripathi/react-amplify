import { useDispatch, useSelector } from "react-redux";
import GeneralInfo from "./components/GeneralInfo";
import BusinessInfo from "./components/BusinessInfo";
import { changeSideBar } from "./features/displayPage/displayPageSlice";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import { useLayoutEffect } from "react";

function App() {

  const dispatch = useDispatch();
  const { sideBar, formToDisplay } = useSelector((store) => store.displayPage)

  useLayoutEffect(() => {
    return () => window.scrollTo(0, 0);
  }, [sideBar, formToDisplay])

  return (
    <div className="flex bg-[#E8EBEE] py-4" style={{ height: `100vh` }}>
      <SideBar />
      <MainContent />
      {/* <button onClick={() => dispatch(changeSideBar({ sideBarName: "General Info" }))}>
        Start
      </button>
      {(sideBar === "General Info") && <GeneralInfo />}
      {(sideBar === "Business Info") && <BusinessInfo />} */}
    </div>
  );
}

export default App;
