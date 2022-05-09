import { useContext, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import UserContext from "../contexts/UserContext";

// ########## STYLE_THEME FOR MUI OPTION MENU ########## //
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    // eslint-disable-next-line
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor: "#3a3b3c",
    color: theme.palette.text.primary,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.primary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

// ~~~~~~~~~~ BEGIN FUNCTION ~~~~~~~~~~ //

export default function TracksOptionMenu(props) {
  // ########## LANGUAGE PROP ########## //
  const { t } = useTranslation();

  // ########## OPEN & CLOSE BEHAVIOR FOR MENU ########## //
  const [anchorEl, setAnchorEl] = useState(null);
  const [showPlaylists, setShowPlaylists] = useState("none");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setShowPlaylists("none");
  };

  // ########## ADD TO QUEUE BUTTON BEHAVIOR ########## //
  const { setAudioListToggle, onClickToQueue } = props;
  const handleAudioListToggle = () => {
    setAudioListToggle(false);
    onClickToQueue();
    handleClose();
    console.warn("Warteschlange on");
  };

  // ########## PLAYLIST SUB_MENU BEHAVIOR ########## //
  const handlePlaylistButton = () => {
    if (showPlaylists !== "flex") {
      setShowPlaylists("flex");
    } else {
      handleClose();
    }
  };
  const handleSelectPlaylist = () => {
    handleClose();
    console.warn(`added to playlist: `);
  };

  // ########## USEEFFECT TO  GET PLAYLISTS FROM DB AND UPDATE STATE ##########//
  // const [playlist, setPlayList] = useState([]);
  // const [dataLoaded, setDataLoaded] = useState(true);
  const { user } = useContext(UserContext);
  // const userID = user.id;
  /* useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/users/${userID}/playlists?source=internal`
      )
      .then((res) => {
        console.error("Playlist query: ", res);
        setPlayList(res.data);
        setDataLoaded(true);
      });
  }, []); */

  // ~~~~~~~~~~ BEGIN RETURN ~~~~~~~~~~//
  return (
    <div>
      {/* ########## OPTION_MENU ICON ########## */}
      <IconButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
      >
        <MoreVertIcon
          sx={{
            display: "block!important",
            color: "text.primary",
            fontSize: "2rem",
          }}
        />
      </IconButton>
      {/* ########## OPTION_MENU WITH MENU_ITEMS ########## */}
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          sx={{ "&:hover": { color: "text.secondary" } }}
          onClick={handleAudioListToggle}
          disableRipple
        >
          <AddCircleIcon sx={{ display: "block!important" }} />
          {t("add-to-queue")}
        </MenuItem>
        {/* ########## ADD TO PLAYLIST BUTTON AND PLAYLIST SUB_MENU ########## */}
        <MenuItem
          sx={
            showPlaylists === "none"
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  "&:hover": { color: "text.secondary" },
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }
          }
          onClick={handlePlaylistButton}
          disableRipple
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PlaylistAddIcon sx={{ display: "block!important" }} />
            {t("add-to-playlist")}
          </div>
          <div
            style={{
              display: showPlaylists,
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* ########## FETCH PLAYLIST DATA AND DISPLAY AS MENU_ITEM IN SUB_MENU ########## */}

            {user.playlists.map((pl) => {
              return (
                <MenuItem
                  key={pl.playlist.id}
                  onClick={handleSelectPlaylist}
                  sx={{
                    paddingLeft: 0,
                    "&:hover": { color: "text.secondary" },
                  }}
                >
                  <img
                    style={{
                      height: "20px",
                      weigth: "20px",
                      marginRight: "10px",
                    }}
                    id="tracks-option-menu-playlist-cover"
                    src={
                      pl.playlist.cover === "" || pl.playlist.cover === null
                        ? "https://cdn.pixabay.com/photo/2013/07/12/18/17/equalizer-153212_1280.png"
                        : pl.playlist.cover
                    }
                    alt="cover"
                  />
                  {pl.playlist.title}
                </MenuItem>
              );
            })}
          </div>
        </MenuItem>
        {/* ########## OPTION_MENU WITH OTHER MENU_ITEMS ########## */}
        <MenuItem
          sx={{ "&:hover": { color: "text.secondary" } }}
          onClick={handleClose}
          disableRipple
        >
          <FileCopyIcon sx={{ display: "block!important" }} />
          Example 2
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          sx={{ "&:hover": { color: "text.secondary" } }}
          onClick={handleClose}
          disableRipple
        >
          <ArchiveIcon sx={{ display: "block!important" }} />
          Example 3
        </MenuItem>
        <MenuItem
          sx={{ "&:hover": { color: "text.secondary" } }}
          onClick={handleClose}
          disableRipple
        >
          <MoreHorizIcon sx={{ display: "block!important" }} />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

TracksOptionMenu.propTypes = {
  setAudioListToggle: PropTypes.func,
  onClickToQueue: PropTypes.func,
};

TracksOptionMenu.defaultProps = {
  setAudioListToggle: () => {},
  onClickToQueue: null,
};
