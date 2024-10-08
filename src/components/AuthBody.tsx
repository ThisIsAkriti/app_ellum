import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

const AuthBody = () => {
  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  return (
    <div className={`${isMenuOpen? "Contract" : "Expand"}`}>
      authentication
    </div>
  )
}
export default AuthBody;