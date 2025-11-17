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
import employees_home from "../assets/projetcs_photos/react_employees/employees_home.png";
import employees_add from "../assets/projetcs_photos/react_employees/employees_add.png";
import employees_update from "../assets/projetcs_photos/react_employees/employees_update.png";

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

//JS collection
import clock from "./projetcs_photos/js_collection/clock.png";
import custom_menu from "./projetcs_photos/js_collection/custom_menu.png";
import homepage_collection from "./projetcs_photos/js_collection/homepage.png";
import stopwatch from "./projetcs_photos/js_collection/stopwatch.png";

//Clone of amazon
import amazon_clone from "./projetcs_photos/clones_css/Amazon_clone.png";

const project_list = [
  {
    name: "Countries Next.js app",
    description:
      "A countries app, fetching list of countries from Free countries API, and login with google with the help of Supabase and user can save/remove their favourites countries. I really enjoying learning this specially finding that supabase is great things in cloud, and also I really learn about MUI from this project. The challenging part for me was working with redux  but with time and my dedication, I figured it out, now the result is in front of you. See You!👋👋",
    technologies: [
      "React",
      "Redux",
      "Next.js",
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
    name: "Old portolio - HTML,CSS,JS",
    description:
      "I created this portfolio as a part of my study project. The portfolio was created on vanilla technologies. I enjoyed and when I turns back to see, I see my learning steps back then, but I really enjoy and love doing this.",
    technologies: ["HTML", "CSS", "JS"],
    links: [
      { github: "https://github.com/Basudev-Pokharel/portfolio.git" },
      { live: "https://basupokharel.vercel.app/" },
    ],
    images: [old_portfolio_fullscreen, old_portfolio_mobile],
  },
  {
    name: "React and MUI restaurant UI",
    description:
      "A fully responsive Restaurant Website built with React and MUI(Material UI).The project showcases a modern restaurant landing page with multiple sections and smooth navigation. I wasn't much familar with MUI about its styling, customization in it, but after this project I strengthen my confidence in building such polished UI with responsive layouts. I really enjoyed doing this 😍🤟",
    technologies: ["React", "MUI"],
    links: [
      { github: "https://github.com/Basudev-Pokharel/React_Restaurant_UI.git" },
      { live: "https://react-restaurant-ui-blue.vercel.app/" },
    ],
    images: [react_ui_mobile, react_ui_mobile2, react_ui_mobile3],
  },
  {
    name: "HR app in React",
    description:
      "A Single Page Application (SPA) built with React that allows  to view, add, and edit employee profiles. The app connects to a mock backend API hosted on Render using json-server.It was fun and a bit frustation building this, since I was new at that time with react but now good ); 👷👋",
    technologies: ["React", "Json Server", "Module Css"],
    images: [hr_app_mobile1, hr_app_mobile2, hr_app],
    links: [
      { github: "https://github.com/Basudev-Pokharel/react-hr-app.git" },
      { live: "https://react-hr-app-ashen.vercel.app/" },
    ],
  },
  {
    name: "Authentication system in Laravel",
    description:
      "A simple Laravel authentication + personal profile update project demonstrating user registration, login, logout, storage in server, file handling, and session management with Bootstrap styling. This project enchanced my understanding of authentication, file handling, session management. Bye :) 🔙🔚👩‍💻👋",
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
    name: "Pancake maker project",
    description:
      "This project was the final assignment of the HTML/CSS/JS course in my college. This project has DOM Manipulation which demonstrates heavy use of events in Js and was the frustating part, but with time and my efforts it became so easy. I really enjoy making this one as it was plain project, Now I move on to bigger nightmares(Frameworks) 🥞💻",
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
    name: "React employees app - Employees CRUD",
    description:
      "A CRUD application buit in react with data coming from json server, which is deployed in render and React side on vercel. This project strengthen my skills in react in component rendering, using states, updating UI based on API response 👋🤘🤘.",
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
    name: "React Todo list",
    description:
      "A To-Do list where users can add tasks and prioritize them by moving items up and down in the list. It was my beginning project in React, and it helped me understanding the fundamentals of state management. I learned that instead of mutating an array directly, we create a copy and update the UI by re-rendering, one of the core principles of React. `Something is better than nothing` has always been my principle for learning 👋👋👋 see you!",
    technologies: ["HTML", "CSS", "JS", "React"],
    links: [
      {
        github: "https://github.com/Basudev-Pokharel/React_ToDoList",
      },
    ],
    images: [todolist],
  },
  {
    name: "Laravel eloquent CRUD",
    description:
      "A CRUD management system built with Laravel, utilizng eloquent ORM to handle database operatins. At first this projects was a bit difficult for me because Laravel has many things like migration, ORM etc.. but eventually I end up embracing them. I havenot deployed any laravel projects as it costs money, in free version the system disable after 2 weeks of inactivity so they don't have deployed link. However, I have included some images here and you can also check code in my github. 🎉🎉🎂🍰👋👋👋",
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
    name: "Netflix Clone- CSS only, Early Days of Learning",
    description:
      "A Netflix homepage clone built only with HTML and CSS during my early learning phase. It was not responsive because I din't know media queries back then, but this project played a key role in building my fundamentals in CSS. I was building this project in VR train while travelling, a 4.5 hour journey filled with CSS, what can be more exciting than this!. I enjoyed a lot in this, so happy for this 😊😊👋👋👋👋",
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
  {
    name: "My JS project collection",
    description:
      "I have created one collection of Js projects, where I have 9 projects in JS only. This showcase my learning in DOM handling and css as well. It was good time learning HTML,CSS,JS for me and I enjoyed that learning a lot, and in these basic projects I had issue in js function which I embraced with js documentation and obviously there is chatGPT to helping in learning.",
    technologies: ["HTML", "CSS", "JS"],
    links: [
      {
        github: "https://github.com/BasuPokharel/Projects_JS.git",
      },
      {
        live: "https://basupokharel.netlify.app/",
      },
    ],
    images: [amazon_clone],
  },
  {
    name: "Amazon home page clone, basic CSS only",
    description:
      "I have created this project while learning CSS, it seems to be big back then but now it feels easy as pie. It was great interesting learning journey. In this project I struggled with flex box in css but now I have learned enough to play with it. Thank you for your time and visiting my projects 🤘🤘👋👋👋.",
    technologies: ["HTML", "CSS"],
    links: [
      {
        github:
          "https://github.com/BasuPokharel/CSS_Practice-AAmazon_css_clone",
      },
      {
        live: "https://basupokharel.github.io/CSS_Practice-AAmazon_css_clone/",
      },
    ],
    images: [amazon_clone],
  },
];
export default project_list;
