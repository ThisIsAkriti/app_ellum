import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

const ErrorBody = () => {
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  return (
    <div className={`${isMenuOpen? "Contract" : "Expand"}`}>
      error
    </div>
  )
}
export default ErrorBody;