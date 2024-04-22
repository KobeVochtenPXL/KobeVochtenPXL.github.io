/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kobe's Portfolio",
  description:
    "Ik ben een derdejaarsstudent aan de Hogeschool PXL die de Professionele Bachelor Toegepaste Informatica met afstudeerrichting Artificiële inteligentie studeert.",
  og: {
    title: "Kobe Vochten Portfolio",
    type: "website",
    //url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Kobe Vochten",
  logo_name: "Kobe Vochten",
  subTitle:
    "Ik ben derdejaarsstudent aan de Hogeschool PXL die Professionele Bachelor Toegepaste Informatica met afstudeerrichting Artificiële inteligentie studeert.",
  //resumeLink:
  //"https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/KobeVochtenPXL.github.io",
  githubProfile: "https://github.com/KobeVochtenPXL",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/KobeVochtenPXL",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  /* {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh1919/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  }, */
  /* {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  }, */
  {
    name: "Gmail",
    link: "mailto:kobe.vochten@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /* {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  }, */
];

// Projects Page
const projectsHeader = {
  title: "Activiteiten",
  description:
    "Een opsomming van alle activiteiten die in mijn portfolio zijn opgenomen.",
  avatar_image_path: "projects_image.svg",
};

export { settings, seo, greeting, socialMediaLinks, projectsHeader };
