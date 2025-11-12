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

//Pancake Starts here
import pancake_maker1 from "../assets/projetcs_photos/pancake_app/pancake_maker1.png";
import pancake_maker2 from "../assets/projetcs_photos/pancake_app/pancake_maker2.png";
import pancake_maker_dashboard from "../assets/projetcs_photos/pancake_app/pancake_maker_dashboard.png";

//React Employeees Goes Here
import employees_home from "../assets/projetcs_photos/React_employees/employees_home.png";
import employees_add from "../assets/projetcs_photos/React_employees/employees_add.png";
import employees_update from "../assets/projetcs_photos/React_employees/employees_update.png";

//Eloquent Crud Goes here
import homepage from "../assets/projetcs_photos/eloquent_crud/homepage.png";
import view from "../assets/projetcs_photos/eloquent_crud/view.png";
import Update from "../assets/projetcs_photos/eloquent_crud/Update.png";
import deleted from "../assets/projetcs_photos/eloquent_crud/deleted.png";

//React Todo
import todolist from "../../src/assets/projetcs_photos/react_to_do/todolist.png";

//Netflix Project
import netflix_1 from "./projetcs_photos/netflix_clone/netflix_1.png";
import netflix_2 from "./projetcs_photos/netflix_clone/netflix_2.png";
import netflix_3 from "./projetcs_photos/netflix_clone/netflix_3.png";

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
  {
    name: "Pancake Project",
    description:
      "This is the pancake frontend project as a final assignment of the HTML/CSS/JS project in my college. The projects has DOM Manipulation which demonstrates heavy use of events in Js. I really enjoy making this one as it was plain project, Now I move on to bigger nightmares(Frameworks) 🥞💻",
    technologies: ["HTML", "CSS", "JS"],
    links: [
      {
        github: "https://github.com/Basudev-Pokharel/Pancake.git",
      },
      {
        live: "https://pancake-neon.vercel.app/",
      },
    ],
    images: [pancake_maker1, pancake_maker2, pancake_maker_dashboard],
  },
  {
    name: "React Employees APP- Employees CRUD",
    description:
      "This is react employee project I created, and it talks to the json server in the render and does some works as CRUD.  ",
    technologies: ["HTML", "CSS", "JS", "React"],
    links: [
      {
        github: "https://github.com/Basudev-Pokharel/React_employees.git",
      },
      {
        live: "https://react-employees-one.vercel.app/",
      },
    ],
    images: [employees_home, employees_add, employees_update],
  },
  {
    name: "React Todo List",
    description:
      "I made Todo List in React using basic technologies in react not much fancy things",
    technologies: ["HTML", "CSS", "JS", "React"],
    links: [
      {
        github: "https://github.com/Basudev-Pokharel/React_ToDoList",
      },
    ],
    images: [todolist],
  },
  {
    name: "Laravel Eloquent CRUD",
    description:
      "I did the CRUD operations in Laravel with the help of ORM(Eloquent) which was good experience as laravel provides good support for it. I didnot deployed this laravel apps as it costs money in free version the system disable after 2 weeks of inactivity so they don't have deployed link",
    technologies: ["HTML", "CSS", "JS", "Laravel", "PHP", "Bootstrap"],
    links: [
      {
        github:
          "https://github.com/Basudev-Pokharel/LARAVEL-_ELOQUENT_CRUD.git",
      },
    ],
    images: [homepage, view, Update, deleted],
  },
  {
    name: "CSS only Netflix Clone- Early Days of Learning",
    description:
      "IN the beginnig when I travel in train there I practiced css and made the netflix clone, It might not be responsive , at that time I didnot knew the Media queries well so",
    technologies: ["HTML", "CSS"],
    links: [
      {
        github: "https://github.com/BasuPokharel/CSS_Practice-Netflix-Clone",
      },
      {
        live: "https://basupokharel.github.io/CSS_Practice-Netflix-Clone/",
      },
    ],
    images: [netflix_1, netflix_2, netflix_3],
  },
];
export default project_list;
