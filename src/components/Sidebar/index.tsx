import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import avatar from './avatar.png';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router";

import Avatar from '@material-ui/core/Avatar';

import './style.scss'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    avatar: {
      width: theme.spacing(14),
      height: theme.spacing(14),
      marginLeft: "60px",
      marginBottom: "50px",
      
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface IProps {
  window?: () => Window;
}
export const Sidebar = (props: IProps) => {
  const { window } = props;
  const [logined, setLogined] = React.useState<Storage>();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const routes = [{ route: "Dashboard", path: "/playlist" }];
  const { push } = useHistory();

  const handleRoute = React.useCallback(
    (route) => {
      push(route);
    },
    [push]
  );
  const handleLogout = React.useCallback(() => {
    localStorage.removeItem("token");
    push("/login");
  }, [push]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    let token: any =
      localStorage.getItem("token") && localStorage.getItem("token");
    setLogined(token);
  }, []);
  const drawer = (
    <div>
      <Box textAlign="center" marginY={5} style={{ cursor: "pointer" }}>
        <Box>
        <Avatar alt="Remy Sharp" id="avatar" src={avatar} className={classes.avatar} />
          <Typography variant="h5">Name Surname</Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        {routes.map((router, index) => (
          <div onClick={() => handleRoute(router.path)} key={router.route}>
            <ListItem button key={router.route}>
              <ListItemText primary={router.route} />
            </ListItem>
          </div>
        ))}
      </List>
      <Divider />
      <List>
        <div onClick={handleLogout}>
          <ListItem button>
            <ListItemText>
              {logined ? <span>Log out</span> : <span>Log in</span>}
            </ListItemText>
          </ListItem>
        </div>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          ></IconButton>
          <Typography variant="h6" noWrap>
            Manage Subscriptions
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Sidebar;
