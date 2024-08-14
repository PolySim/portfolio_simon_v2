import { Skills } from "@/types/skills.types";
import { Project } from "@/types/projects.types";

export const SECTIONS = ["Home", "About me", "Skills", "Projects", "Contact"];

export const CATCH_PHRASE =
  "Your vision deserves a tailor-made online presence: I'll take care of it.";

export const SKILLS: Skills = {
  frontend: [
    {
      title: "NextJS",
      image_src: "/skill/next.png",
      background_linear: "linear-gradient(45deg,#ffcca8 .21%,#fffa87 99.93%)",
      doc_url: "https://nextjs.org/",
    },
    {
      title: "Typescript",
      image_src: "/skill/typescript.png",
      background_linear:
        "linear-gradient(225.22deg,#93ffff -.09%,#59a5ff 100.01%)",
      doc_url: "https://www.typescriptlang.org/",
    },
    {
      title: "Styled-components",
      image_src: "/skill/styled-components.png",
      background_linear:
        "linear-gradient(225.22deg,#aae0ff -.01%,#5affce 100.08%)",
      doc_url: "https://styled-components.com/",
    },
    {
      title: "TailwindCSS",
      image_src: "/skill/tailwind.png",
      background_linear: "linear-gradient(225deg,#b1b5ff .07%,#4260ff 99.79%)",
      doc_url: "https://tailwindcss.com/",
    },
    {
      title: "Zod",
      image_src: "/skill/zod.png",
      background_linear:
        "linear-gradient(225.22deg,#ffb5b5 .06%,#ff4fce 50.11%,#d256ff 100.15%)",
      doc_url: "https://zod.dev/",
    },
  ],
  backend: [
    {
      title: "Flask",
      image_src: "/skill/flask.png",
      background_linear: "linear-gradient(225deg,#ffc2f9,#c03cff 99.71%)",
      doc_url: "https://flask.palletsprojects.com/",
    },
    {
      title: "MySQL",
      image_src: "/skill/mysql.png",
      background_linear: "linear-gradient(225deg,#b1b5ff .07%,#4260ff 99.79%)",
      doc_url: "https://www.mysql.com/",
    },
    {
      title: "Python",
      image_src: "/skill/python.png",
      background_linear:
        "linear-gradient(45deg,#89e3ff .29%,#cfffb8 50.14%,#ffe177)",
      doc_url: "https://www.python.org/",
    },
    {
      title: "Docker",
      image_src: "/skill/docker.png",
      background_linear:
        "linear-gradient(90deg, hsla(17, 82%, 53%, 1) 0%, hsla(319, 74%, 64%, 1) 100%)",
      doc_url: "https://www.docker.com/",
    },
    {
      title: "NodeJS",
      image_src: "/skill/nodejs.png",
      background_linear:
        "linear-gradient(90deg, hsla(31, 90%, 76%, 1) 0%, hsla(302, 82%, 76%, 1) 100%)",
      doc_url: "https://nodejs.org/fr",
    },
    {
      title: "MongoDB",
      image_src: "/skill/mongo.png",
      background_linear: "linear-gradient(45deg,#ffcca8 .21%,#fffa87 99.93%)",
      doc_url: "https://www.mongodb.com/fr-fr",
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    name: "Professional photographer",
    demoPath: "https://angelinedesdevises.fr/",
    sourceCodePath: "https://github.com/PolySim/portfolio_ad_next",
    imgPath: "/project/angeline.png",
  },
  {
    name: "Clone Apple MacBook",
    demoPath: "https://polysim.github.io/Apple_MacbookAir/",
    sourceCodePath: "https://github.com/PolySim/Apple_MacbookAir",
    imgPath: "/project/macBookAir.png",
  },
  {
    name: "This portfolio",
    demoPath: "",
    sourceCodePath: "https://github.com/PolySim/portfolio_simon_v2",
    imgPath: "/project/simon.png",
  },
  {
    name: "65 Pasion Montagne",
    sourceCodePath: "https://github.com/PolySim/65_passion_mountain_web",
    imgPath: "/project/65PassionMontagne.png",
  },
];
