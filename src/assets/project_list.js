import countries_app_home from "../assets/projetcs_photos/countries_app/countries_country.png";
import countries_app_mobile from "../assets/projetcs_photos/countries_app/countries_app_mobile.png";
import countries_app_favourites from "../assets/projetcs_photos/countries_app/countries_favouritespng.png";

//Old Portfolio
import old_portfolio_mobile from "../assets/projetcs_photos/old_portfolio/old_portfolio_mobile.png";
import old_portfolio_fullscreen from "../assets/projetcs_photos/old_portfolio/old_portfolio_fullscreen.png";

//Restaurant UI
import react_ui_mobile from "../assets/projetcs_photos/restaurant_ui/restaurant_ui_mobile.png";
import react_ui_mobile2 from "../assets/projetcs_photos/restaurant_ui/restaurant_ui_mobile2.png";
import react_ui_mobile3 from "../assets/projetcs_photos/restaurant_ui/restaurant_ui_mobile3.png";

//Hr App
import hr_app from "../assets/projetcs_photos/hr_app/hr_app.png";
import hr_app_mobile1 from "../assets/projetcs_photos/hr_app/hr_app_mobile.png";
import hr_app_mobile2 from "../assets/projetcs_photos/hr_app/hr_app_mobile2.png";

//Auth + FIle upload Laravel
import dashboard from "../assets/projetcs_photos/laravel_auth+pic/Dashboatrd.png";
import Home_Page from "../assets/projetcs_photos/laravel_auth+pic/Home_Page.png";
import login_page from "../assets/projetcs_photos/laravel_auth+pic/login_page.png";
import Register_page from "../assets/projetcs_photos/laravel_auth+pic/Register_page.png";
import update_page from "../assets/projetcs_photos/laravel_auth+pic/update_page.png";

const project_list = [
  {
    name: "countries next js app",
    description:
      "A countries app fetching list of countries from Free countries API, and login with google with the help of Supbase and user can save/remove their favourites countries",
    technologies: [
      "React",
      "Redux",
      "Nextjs",
      "MUI",
      "Supabase",
      "Postgres",
      "SQL",
    ],
    links: [
      { github: "https://github.com/Basudev-Pokharel/countries_nextjs.git" },
      { live: "https://countries-nextjs-1dwa.vercel.app/" },
    ],
    images: [
      countries_app_home,
      countries_app_mobile,
      countries_app_favourites,
    ],
  },
  {
    name: "Old Portfolio",
    description:
      "I created this portfolio as a part of my study project. The portfolio was created on vanilla technologies. I enjoyed and when I turns back to see I see my learning steps back then, but I really enjoy and love doing this",
    technologies: ["HTML", "CSS", "JS"],
    links: [
      { github: "https://github.com/Basudev-Pokharel/portfolio.git" },
      { live: "https://basupokharel.vercel.app/" },
    ],
    images: [old_portfolio_fullscreen, old_portfolio_mobile],
  },
  {
    name: "React and Mui Restaurant UI",
    description:
      "A fully responsive Restaurant Website built with React.The project showcases a modern restaurant landing page with multiple sections and smooth navigation. I really enjoyed doing this 😍🤟",
    technologies: ["React", "MUI"],
    links: [
      { github: "https://github.com/Basudev-Pokharel/React_Restaurant_UI.git" },
      { live: "https://react-restaurant-ui-blue.vercel.app/" },
    ],
    images: [react_ui_mobile, react_ui_mobile2, react_ui_mobile3],
  },
  {
    name: "HR App in React",
    description:
      "A Single Page Application (SPA) built with React that allows you to view, add, and edit employee profiles. The app connects to a mock backend API hosted on Render using json-server.It was fun and a bit frustation building this, since I was new at that time with react but now good ); 👷👋",
    technologies: ["React", "Json Server", "Module Css"],
    images: [hr_app_mobile1, hr_app_mobile2, hr_app],
    links: [
      { github: "https://github.com/Basudev-Pokharel/react-hr-app.git" },
      { live: "https://react-hr-app-ashen.vercel.app/" },
    ],
  },
  {
    name: "Authentication Sytem in Laravel",
    description:
      "A simple Laravel authentication + personal profile update project demonstrating user registration, login, logout, storage in server, file handling, and session management with Bootstrap styling.); 🔙🔚👩‍💻",
    technologies: ["Laravel", "Bootstrap"],
    images: [Home_Page, Register_page, login_page, dashboard, update_page],
    links: [
      {
        github:
          "https://github.com/Basudev-Pokharel/laravel_auth-profile_pic_CRUD.git",
      },
    ],
  },
  {
    name: "More Projects",
    description:
      "There are more projects in my github You can check my github and I have not yet included my basic html/css practiced websites here they are good to see, as It reflects my learning Journey from beginnig",
    technologies: ["HTML", "CSS", "alllll......"],
    links: [
      {
        github:
          "https://github.com/Basudev-Pokharel/laravel_auth-profile_pic_CRUD.git",
      },
    ],
  },
];
export default project_list;
