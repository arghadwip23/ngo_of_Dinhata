import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const SocialShare = ({ url, description }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedDescription = encodeURIComponent(description);

  const socialPlatforms = [
    {
      name: "Twitter",
      icon: <FaTwitter className="text-blue-500" />,
      link: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedDescription}`,
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-700" />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-blue-600" />,
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-green-500" />,
      link: `https://api.whatsapp.com/send?text=${encodedDescription}%20${encodedUrl}`,
    },
  ];

  return (
    <div className="flex space-x-4 mt-4">
      {socialPlatforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 p-2 rounded-lg transition duration-300 hover:scale-110 bg-gray-100 dark:bg-gray-800 shadow-md"
        >
          {platform.icon}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{platform.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialShare;
