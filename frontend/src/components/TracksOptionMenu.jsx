import * as React from "react";
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
    backgroundColor: "#e4e6eb",
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

export default function TracksOptionMenu(props) {
  const { t } = useTranslation();
  const { setAudioListToggle, onClickToQueue } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAudioListToggle = () => {
    setAudioListToggle(false);
    onClickToQueue();
    handleClose();
    console.warn("Warteschlange on");
  };

  return (
    <div>
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
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAudioListToggle} disableRipple>
          <AddCircleIcon sx={{ display: "block!important" }} />
          {t("add-to-queue")}
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <PlaylistAddIcon sx={{ display: "block!important" }} />
          {t("add-to-playlist")}
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon sx={{ display: "block!important" }} />
          Example 2
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon sx={{ display: "block!important" }} />
          Example 3
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon sx={{ display: "block!important" }} />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

TracksOptionMenu.propTypes = {
  setAudioListToggle: PropTypes.string,
  onClickToQueue: PropTypes.func,
};

TracksOptionMenu.defaultProps = {
  setAudioListToggle: "",
  onClickToQueue: null,
};
