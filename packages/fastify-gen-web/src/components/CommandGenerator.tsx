import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, Terminal } from "lucide-react";

import { useProject, type ProjectConfig } from "@/contexts/ProjectContext";
import { toast } from "sonner";

export const CommandGenerator = () => {
  const { config } = useProject();
  const [copied, setCopied] = React.useState(false);

  const generateCommand = (config: ProjectConfig): string => {
    const parts = ["fastify-gen"];

    if (config.name) {
      parts.push(`--name ${config.name}`);
    }

    if (config.plugins.length > 0) {
      parts.push(`--plugins ${config.plugins.join(",")}`);
    }

    if (config.orm !== "none") {
      parts.push(`--orm ${config.orm}`);
    }

    if (config.docker) {
      parts.push("--docker");
    }

    return parts.join(" ");
  };

  const copyCommand = async () => {
    const command = generateCommand(config);
    try {
      await navigator.clipboard.writeText(command);
      toast("Command copied!", {
        description: "The CLI command has been copied to your clipboard.",
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command: ", err);
    }
  };

  const command = generateCommand(config);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-100 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            CLI Command
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-background rounded-lg p-4 relative">
            <div className="w-full">
              <pre className="text-primary text-sm font-mono overflow-x-auto w-0 min-w-full p-4">
                <code>{command}</code>
              </pre>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyCommand}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
