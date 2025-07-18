import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiJupyter,
  SiOpencv
} from "@icons-pack/react-simple-icons";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} color="#F7DF1E" />,
  Python: <SiPython size={iconSize} color="#3776AB" />,
  "C++": <SiCplusplus size={iconSize} color="#00599C" />,
  C: <SiC size={iconSize} color="#A8B9CC" />,
  HTML5: <SiHtml5 size={iconSize} color="#E34F26" />,
  CSS3: <SiCss3 size={iconSize} color="#1572B6" />,
  // PHP: <SiPhp size={iconSize} color="#777BB4" />,
  // PostgreSQL: <SiPostgresql size={iconSize} color="#336791" />,
  "React.js": <SiReact size={iconSize} color="#61DAFB" />,
  "Node.js": <SiNodedotjs size={iconSize} color="#339933" />,
  Express: <SiExpress size={iconSize} color="#000000" />,
  Git: <SiGit size={iconSize} color="#F05032" />,
  GitHub: <SiGithub size={iconSize} color="#181717" />,
  Postman: <SiPostman size={iconSize} color="#FF6C37" />,
  Docker: <SiDocker size={iconSize} color="#2496ED" />,
  // OpenCV: <SiOpencv size={iconSize} color="#5C3EE8" />,
  Jupyter: <SiJupyter size={iconSize} color="#F37626" />
};
