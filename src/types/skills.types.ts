export type Skill = {
  title: string;
  image_src: string;
  background_linear: string;
  doc_url: string;
};

export type Skills = {
  frontend: Skill[];
  backend: Skill[];
};
