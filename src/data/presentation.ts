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
    "I'm a vessel for the programming gods to whisper to computers in this mortal world. Currently teaching rocks to be humans.",
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
