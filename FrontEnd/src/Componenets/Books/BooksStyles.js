import { makeStyles } from "@material-ui/core/styles";
import logo1 from "../../assets/background/17.png"
import mainImg from "../../assets/background/20.png"

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    mainPage: { flexGrow: 1, overflowX: "hidden", overflowY: "hidden" },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(5),
        paddingTop: theme.spacing(2),
    },
    contentHeader: {
        textAlign: "center",
        flexGrow: 1,
        backgroundColor: "#2a344a",
        color: "white",
        fontWeight: "bolder",
        paddingLeft: theme.spacing(10),
        paddingTop: theme.spacing(5),
        margin: "0 !important",
    },
    contentFeatured: {
        flexGrow: 1,
        backgroundColor: "#2a344a",
        padding: theme.spacing(5),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(4),
    },
    root: {
        flexGrow: 1,
    },
    searchs: {
        justifyContent: "center",
        display: "flex",
    },
    searchb: {
        backgroundColor: "white",
        height: "80%",
        width: "60%",
        padding: "15px",
        borderRadius: "10px",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        /*backgroundColor:"white",
        borderRadius: 5*/
    },
    backgroundImage: {
        backgroundImage:`url(${logo1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: "20vh",
        /*width: "100%", // Add this line
        height: "100%", // Add this line*/
    },
    mainBackGround:{
        backgroundImage:`url(${mainImg})`,
        backgroundSize:"cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: "90vh",
        display: "flex",
        alignItems:"center",
        justifyContent:"center"
        /*width: "100%", // Add this line
        height: "100%", // Add this line*/

    }
}));
