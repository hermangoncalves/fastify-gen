import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

export interface ProjectConfig {
  name: string;
  plugins: string[];
  orm: string;
  docker: boolean;
}

interface ProjectContextType {
  config: ProjectConfig;
  setConfig: (config: ProjectConfig) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: PropsWithChildren) {
  const [config, setConfig] = useState<ProjectConfig>({
    name: "",
    plugins: [],
    orm: "none",
    docker: false,
  });

  return (
    <ProjectContext.Provider value={{ config, setConfig }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}
