type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "akshatgiri@gmail.com",
  title: "Akshat Giri",
  // profile: "/profile.webp",
  description:
    "Programmer, working on returning $70B back to Americans.",
  socials: [
    {
      label: "X",
      link: "https://x.com/Akshat_Giri",
    },
    {
      label: "Github",
      link: "https://github.com/AkshatGiri",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/akshatgiri/",
    },
  ],
};

export default presentation;
