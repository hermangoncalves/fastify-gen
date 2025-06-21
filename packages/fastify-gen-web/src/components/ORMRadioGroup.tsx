import { useProject } from "@/contexts/ProjectContext";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const AVAILABLE_ORMS = [
  {
    id: "none",
    name: "None",
    description: "No ORM - use raw SQL queries or database drivers directly",
  },
  {
    id: "drizzle",
    name: "Drizzle ORM",
    description: "Lightweight TypeScript SQL ORM with compile-time safety",
  },
  {
    id: "prisma",
    name: "Prisma ORM",
    description:
      "Modern TypeScript ORM with type-safe queries and a declarative schema",
  },
  {
    id: "typeorm",
    name: "TypeORM",
    description:
      "ORM for TypeScript and JavaScript supporting Active Record and Data Mapper patterns",
  },
  {
    id: "sequelize",
    name: "Sequelize",
    description:
      "Promise-based Node.js ORM for Postgres, MySQL, SQLite and more",
  },
  {
    id: "mikroorm",
    name: "MikroORM",
    description: "TypeScript ORM for Node.js based on the Data Mapper pattern",
  },
  {
    id: "objection",
    name: "Objection.js",
    description: "SQL-friendly ORM for Node.js, built on top of Knex.js",
  },
  {
    id: "knex",
    name: "Knex.js",
    description:
      "SQL query builder for Node.js — not an ORM but commonly used like one",
  },
];

export default function ORMRadioGroup() {
  const { config, setConfig } = useProject();

  const handleOrmSelect = (ormId: string) => {
    setConfig({
      ...config,
      orm: ormId,
    });
  };

  return (
    <RadioGroup 
      className="gap-2" 
      value={config.orm} 
      onValueChange={handleOrmSelect}
    >
      {AVAILABLE_ORMS.map((orm) => (
        <div 
          key={orm.id}
          className="border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none"
        >
          <RadioGroupItem
            value={orm.id}
            id={orm.id}
            aria-describedby={`${orm.id}-description`}
            className="order-1 after:absolute after:inset-0"
          />
          <div className="grid grow gap-2">
            <Label htmlFor={orm.id}>{orm.name}</Label>
            <p
              id={`${orm.id}-description`}
              className="text-muted-foreground text-xs"
            >
              {orm.description}
            </p>
          </div>
        </div>
      ))}
    </RadioGroup>
  );
}
