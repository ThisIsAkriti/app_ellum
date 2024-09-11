import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

const SubscriptionBody = () => {
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  return (
    <div className={`${isMenuOpen? "Contract" : "Expand"}`}>
      subscription
    </div>
  )
}
export default SubscriptionBody;