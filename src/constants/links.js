import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

// Navbar links
const navbar_links = [
  "home",
  "about",
  "work",
  "skills",
  "testimonial",
  "contact",
];

// Contact links
const contact_links = {
  email: "petru.constantain.try@outlook.com",
  phone: "LinkedIn",
  linkedin: "https://www.linkedin.com/in/petru-c",
};

// Social links
const social_links = [
  {
    name: "Email",
    icon: <AiOutlineMail />,
    url: "mailto:petru.constantain.try@outlook.com",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/petru-c",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    url: "https://github.com/PetruCTech",
  },
];

// Source code
const source_code = "https://github.com/PetruCTech";

// links
const links = {
  navbar_links,
  contact_links,
  social_links,
  source_code,
};

export default links;
