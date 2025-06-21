import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  FolderOpen,
} from "lucide-react";
import { useProject, type ProjectConfig } from "@/contexts/ProjectContext";

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
}

export const FileTree = () => {
  const { config } = useProject();
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["root", "src", "routes"])
  );

  const generateFileStructure = (config: ProjectConfig): FileNode => {
    const files: FileNode[] = [
      {
        name: "package.json",
        type: "file",
      },
      {
        name: "README.md",
        type: "file",
      },
    ];

    if (config.docker) {
      files.push({
        name: "Dockerfile",
        type: "file",
      });

      files.push({
        name: "docker-compose.yml",
        type: "file",
      });
    }

    const srcFolder: FileNode = {
      name: "src",
      type: "folder",
      children: [
        {
          name: "app.js",
          type: "file",
        },
        {
          name: "routes",
          type: "folder",
          children: [
            {
              name: "api.js",
              type: "file",
            },
          ],
        },
      ],
    };

    if (config.orm === "prisma") {
      srcFolder.children!.push({
        name: "prisma",
        type: "folder",
        children: [
          {
            name: "schema.prisma",
            type: "file",
          },
        ],
      });
    }

    files.push(srcFolder);

    return {
      name: config.name || "my-fastify-api",
      type: "folder",
      children: files,
    };
  };

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFileTree = (
    node: FileNode,
    path: string = "",
    level: number = 0
  ): React.ReactNode => {
    const fullPath = path ? `${path}/${node.name}` : node.name;
    const isExpanded = expandedFolders.has(fullPath);

    if (node.type === "folder") {
      return (
        <div key={fullPath}>
          <div
            className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-slate-700 transition-colors`}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
            onClick={() => toggleFolder(fullPath)}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-slate-400" />
            )}
            {isExpanded ? (
              <FolderOpen className="w-4 h-4 text-primary" />
            ) : (
              <Folder className="w-4 h-4 text-primary" />
            )}
            <span className="text-slate-200 text-sm">{node.name}</span>
          </div>
          {isExpanded && node.children && (
            <div>
              {node.children.map((child) =>
                renderFileTree(child, fullPath, level + 1)
              )}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div
          key={fullPath}
          className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-slate-700 transition-colors"
          style={{ paddingLeft: `${level * 16 + 24}px` }}
        >
          <File className="w-4 h-4 text-slate-300" />
          <span className="text-slate-200 text-sm">{node.name}</span>
        </div>
      );
    }
  };

  const fileStructure = generateFileStructure(config);

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-slate-100 flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          Project Structure
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <div className="max-h-96 overflow-y-auto">
          {renderFileTree(fileStructure)}
        </div>
      </CardContent>
    </Card>
  );
};
