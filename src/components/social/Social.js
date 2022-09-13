import React from "react";
import { ImTwitter } from "react-icons/im";
// import { RiWhatsappFill } from "react-icons/ri";
import { SiLinktree } from "react-icons/si";
import "./social.css";

const Social = () => {
  return (
    <div className="sociai">
      <div className="social">
        <a href="https://twitter.com/SMhdBRZ" target="_blank" rel="noreferrer">
          <ImTwitter
            size="1.5rem"
            color="var(--color-header)"
            target="_blank"
            rel="noreferrer"
          />
        </a>
        {/* target  - rel ------------------------------------------------------- */}
        <a href="https://linktr.ee/s_mhd_brz" target="_blank" rel="noreferrer">
          <SiLinktree size="1.5rem" color="var(--color-header)" />
        </a>
      </div>
    </div>
  );
};

export default Social;
