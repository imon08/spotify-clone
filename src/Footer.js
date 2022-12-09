import React from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">

      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon"/>
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
        <SkipNextIcon className="footer__icon"/>
        <RepeatIcon className="footer__green"/>

      </div>
      <div className="footer__right">

      </div>
    </div>
  );
}

export default Footer;
