import React, { useCallback, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigation } from "./Home";
import { useSearch } from "../contexts/SearchContext";
import { makeStyles, fade } from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import appRoutes from "../routes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(10),
  },
  navigation: {
    backgroundColor: "#f0c273",
  },
  rightMenu: {
    flexGrow: 0.2,
    marginLeft: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  links: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  searchBtn: {
    marginRight: theme.spacing(0.4),
    marginBottom: theme.spacing(0.4),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { userPermissions } = useNavigation();
  const { search, setSearch } = useSearch();
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleSearchClear = useCallback(() => setSearch(""), [setSearch]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navigation}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Blog
          </Typography>
          <div className={classes.links}>
            {appRoutes
              .filter(({ menuLocation }) => menuLocation)
              .filter(
                ({ permissions }) =>
                  permissions.some((permission) =>
                    userPermissions.includes(permission)
                  ) || permissions.length === 0
              )

              .map(({ path, title }) => (
                <NavLink
                  to={path}
                  key={path}
                  style={{ textDecoration: "none" }}
                >
                  <Button color="primary">{title}</Button>
                </NavLink>
              ))}
          </div>
          <div className={classes.search}>
            <InputBase
              ref={searchRef}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={({ target: { value } }) => setSearch(value)}
            />

            <IconButton
              className={classes.searchBtn}
              aria-label="clear search"
              size="small"
              color="inherit"
              onClick={handleSearchClear}
            >
              <HighlightOffIcon />
            </IconButton>
          </div>
          <div className={classes.rightMenu}>
            <Button
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
            >
              Login
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>My account</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
