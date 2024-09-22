
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import useDocumentTitle from "../utils/hooks/useDocumentTitle";
import MUIDataTable from "mui-datatables";
import { createTheme , ThemeProvider} from "@mui/material/styles";
import { data } from "../utils/data/info_newCompany.json";

const columns = [
  {
    name:"name",
    options:{
      customBodyRender : () => (
        <img src="" alt="pic" className="img"/>
      )
    }
  },
  {
    name:"email"
  },
  {
    name:"status",
    options:{
      customBodyRender : (value:string)=>(
        <p className={`table_status ${value === "Active" ? 'active' : 'inactive'}`}>{value}</p>
      )
    }
  },
]

const options = {
  selectableRows: 'none' as const,
  rowsPerPageOptions: [5, 10, 15, 20], 
};

const NewCompanyBody:React.FC = () => {

  const isMenuOpen = useSelector((state : RootState) => state.sidebarToggle.isMenuOpen);
  useDocumentTitle('Employee Profile - HRMS admin template');
  const getMuiTheme = () => createTheme({
    palette:{
      background:{
        paper:"white",
      },
    },
    components:{
      MuiTableCell:{
        styleOverrides:{
          head:{
            padding:"10px 4px"
          },
          body:{
            padding:"20px 15px"
          }
        }
      }
    }
  });
  return (
    <div className={` new_company_body ${isMenuOpen? " Contract" : "Expand"}`}>
      <div>
      <ThemeProvider theme={getMuiTheme}>
        <MUIDataTable
          title="New Companies"
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
    </div>
  );
}
export default NewCompanyBody;