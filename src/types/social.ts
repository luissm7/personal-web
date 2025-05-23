type SocialId = "linkedin" | "github" | "cv";

type SocialName = "Linkedin" | "GitHub" | "CV";

export interface Social {
  id: SocialId;
  name: SocialName;
  url: string;
  label: string;
  image: {
    logo: any;
    width: number;
    height: number;
  };
}