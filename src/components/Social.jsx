import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialShare = [
  { Social: <FaGithub size={18} />, link: "https://github.com/tanveer19" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/tanveer-hossain-jony/",
  },
  { Social: <FaTwitter />, link: "https://twitter.com/thjbd19" },
  { Social: <SiLeetcode />, link: "https://leetcode.com/tanveer19/" },
  { Social: <FaFacebookF />, link: "https://www.facebook.com/thjbd19" },
];

const Social = () => {
  return (
    <div className="social-icons flex flex-wrap pl-0 mb-0 list-none justify-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
