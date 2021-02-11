import React from "react";

import { SiGmail, SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = (props) => {
  const logoStylesFirst = {
    height: "25px",
    width: "25px",
    color: props.color,
  };
  const logoStyles = {
    height: "25px",
    width: "25px",
    color: props.color,
    marginLeft: "20px",
  };

  return (
    <div>
      <a
        href="https://github.com/mathieutranchida"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FiGithub style={logoStylesFirst} />
      </a>
      <a
        href="https://www.linkedin.com/in/mathieutranchida/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedinIn style={logoStyles} />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=mathieu.tranchida@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SiGmail style={logoStyles} />
      </a>
      <a
        href="https://www.instagram.com/mathieutranchida/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SiInstagram style={logoStyles} />
      </a>
    </div>
  );
};

export default SocialMedia;
