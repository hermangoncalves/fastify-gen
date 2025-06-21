import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CheckboxCard from "./checkboxCard";
import { useProject } from "@/contexts/ProjectContext";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";

const AVAILABLE_PLUGINS = [
  { id: "cors", name: "CORS", description: "Cross-Origin Resource Sharing" },
  { id: "swagger", name: "Swagger", description: "API Documentation" },
  { id: "jwt", name: "JWT", description: "JSON Web Tokens" },
  { id: "helmet", name: "Helmet", description: "Security Headers" },
  {
    id: "rate-limit",
    name: "Rate Limit",
    description: "Request Rate Limiting",
  },
  { id: "multipart", name: "Multipart", description: "File Upload Support" },
  { id: "websocket", name: "WebSocket", description: "WebSocket Support" },
  { id: "static", name: "Static", description: "Static File Serving" },

  { id: "env", name: "Env", description: "Environment Variable Loader" },
  {
    id: "sensible",
    name: "Sensible",
    description: "Common Utilities and Error Handlers",
  },
  {
    id: "compress",
    name: "Compress",
    description: "Gzip/Deflate Compression",
  },
  {
    id: "formbody",
    name: "FormBody",
    description: "URL-Encoded Form Parsing",
  },
  {
    id: "cookie",
    name: "Cookie",
    description: "Cookie Parsing and Serialization",
  },
  {
    id: "session",
    name: "Session",
    description: "Session Management with Cookies",
  },
  {
    id: "redis",
    name: "Redis",
    description: "Redis Client Integration",
  },
  {
    id: "typeorm",
    name: "TypeORM",
    description: "Database ORM for SQL-based Databases",
  },
  {
    id: "prisma",
    name: "Prisma",
    description: "Next-generation Type-safe ORM",
  },
  {
    id: "mongoose",
    name: "Mongoose",
    description: "MongoDB ODM Integration",
  },
  {
    id: "socket.io",
    name: "Socket.IO",
    description: "Real-time Communication with Socket.IO",
  },
  {
    id: "opentelemetry",
    name: "OpenTelemetry",
    description: "Distributed Tracing and Metrics",
  },
  {
    id: "metrics",
    name: "Metrics",
    description: "Prometheus-Compatible Metrics",
  },
];

export default function Plugins() {
  const { config, setConfig } = useProject();
  const [searchQuery, setSearchQuery] = useState("");

  const handlePluginToggle = (pluginId: string) => {
    const plugins = config.plugins.includes(pluginId)
      ? config.plugins.filter((p) => p !== pluginId)
      : [...config.plugins, pluginId];

    setConfig({
      ...config,
      plugins,
    });
  };

  const handleClearSearhQuery = () => setSearchQuery("");

  const filteredPlugins = AVAILABLE_PLUGINS.filter(
    (plugin) =>
      plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plugin.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2"
        defaultValue="3"
      >
        <AccordionItem
          value="fastify-plugins"
          className="has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
        >
          <AccordionTrigger className="justify-start gap-3 py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0 [&>svg]:-order-1">
            Fastify Plugins
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-2">
            <div className="space-y-4">
              <div className="relative">
                <Input
                  placeholder="Search plugins..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full ps-9"
                />
                <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                  <SearchIcon size={16} />
                </div>
                <button
                  className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Submit search"
                  type="submit"
                  onClick={handleClearSearhQuery}
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>

              <ScrollArea className="h-72 w-full">
                <div className="flex flex-col space-y-4 w-full">
                  {filteredPlugins.map((plugin) => (
                    <CheckboxCard
                      key={plugin.id}
                      id={plugin.id}
                      label={plugin.name}
                      description={plugin.description}
                      onConfigChange={() => handlePluginToggle(plugin.id)}
                    />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
