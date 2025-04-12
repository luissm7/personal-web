import type { Social } from "@/types/social";

import Linkedin from "@/assets/linkedin.svg?url";
import GitHub from "@/assets/github.svg?url";
import CV from "@/assets/download.svg?url";


export const SOCIAL: Social[] = [
  {
    id: "linkedin",
    name: "Linkedin",
    url: "https://www.linkedin.com/in/luis-san-mart%C3%ADn-garc%C3%ADa-7374691b2",
    label: "Visitar mi perfil de Linkedin",
    image: {
      logo: Linkedin,
      width: 35,
      height: 35,
    },
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/luissm7/personal-web",
    label: "Visitar repositorio de mi página personal en GitHub",
    image: {
      logo: GitHub,
      width: 35,
      height: 35,
    },
  },
  {
    id: "cv",
    name: "CV",
    url: "/files/CV_Luis_San_Martin_G.pdf",
    label: "Descargar mi CV",
    image: {
      logo: CV,
      width: 35,
      height: 35,
    },
  },
];