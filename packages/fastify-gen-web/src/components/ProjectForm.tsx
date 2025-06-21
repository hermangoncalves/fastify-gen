import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Plugins from "./Plugins";
import { useProject } from "@/contexts/ProjectContext";
import CheckboxCard from "./checkboxCard";
import ORMs from "./Orm";

export const ProjectForm = () => {
  const { config, setConfig } = useProject();
  const handleNameChange = (name: string) => {
    setConfig({
      ...config,
      name,
    });
  };

  const handleDockerToggle = (docker: boolean) => {
    setConfig({
      ...config,
      docker,
    });
  };

  return (
    <div className="space-y-6">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-slate-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Project Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="email">Project name</Label>
            <Input
              value={config.name}
              onChange={(e) => {
                handleNameChange(e.target.value);
              }}
              id="email"
              type="text"
              placeholder="my-fastify-api"
            />
          </div>

          <Plugins />
          <ORMs />
          <CheckboxCard
            id="dockerfile"
            label="Dockerfile"
            description="Add Dockerfile to your project"
            onConfigChange={() => handleDockerToggle(!config.docker)}
          />
        </CardContent>
      </Card>
    </div>
  );
};
