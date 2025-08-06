import React from "react";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiDjango,
  SiPostman,
  SiGit,
  SiGithub,
  SiFirebase,
  SiAmazonaws,
  SiJirasoftware,
  SiJenkins,
  SiMongodb,
  SiMysql
} from "@icons-pack/react-simple-icons";

export type stacksProps = {
  [key: string]: React.JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  Python: <SiPython size={iconSize} color="#3776AB" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  HTML5: <SiHtml5 size={iconSize} color="#E34F26" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  CSS3: <SiCss3 size={iconSize} color="#1572B6" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  Flask: <SiFlask size={iconSize} color="#000000" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  Django: <SiDjango size={iconSize} color="#092E20" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  Postman: <SiPostman size={iconSize} color="#FF6C37" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  JIRA: <SiJirasoftware size={iconSize} color="#0052CC" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  Firebase: <SiFirebase size={iconSize} color="#FFCA28" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  Git: <SiGit size={iconSize} color="#F05032" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  GitHub: <SiGithub size={iconSize} color="#181717" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  Jenkins: <SiJenkins size={iconSize} color="#D24939" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  AWS: <SiAmazonaws size={iconSize} color="#FF9900" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  MongoDB: <SiMongodb size={iconSize} color="#47A248" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  MySQL: <SiMysql size={iconSize} color="#4479A1" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,

    // ✅ Replaced text spans with logo images
  "API Testing": <SiPostman size={iconSize} color="#FF6C37" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  Langchain: (
    <img
      src="/skillsLogos/langchain.png"
      alt="Langchain"
      width={iconSize}
      height={iconSize}
    />
  ),
  GenAI: (
    <img
      src="/skillsLogos/genai.png"
      alt="GenAI"
      width={iconSize}
      height={iconSize}
    />
  ),
  "MongoDB Compass": (
    <img
      src="/skillsLogos/mongodb.png"
      alt="MongoDB Compass"
      width={iconSize}
      height={iconSize}
    />
  ),
  "MySQL Workbench": (
    <img
      src="/skillsLogos/mysqlworkbench.png"
      alt="MySQL Workbench"
      width={iconSize}
      height={iconSize}
    />
  )
};
