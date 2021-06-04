import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";
import { InfoBarContainer, LeftInner, RightInner } from "./InfoBar.styles";
import { Link } from "react-router-dom";

const InfoBar = ({ roomId }) => {
  return (
    <InfoBarContainer>
      <LeftInner>
        <img src={onlineIcon} alt="online icon" style={{ marginRight: "5%" }} />
        <h3>{roomId}</h3>
      </LeftInner>
      <RightInner>
        <Link to="/">
          <img src={closeIcon} alt="close icon" />
        </Link>
      </RightInner>
    </InfoBarContainer>
  );
};

export default InfoBar;
