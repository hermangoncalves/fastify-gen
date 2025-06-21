// import { useId, useState } from "react";
// import { CheckIcon, ChevronDownIcon } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Label } from "@/components/ui/label";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { useProject } from "@/contexts/ProjectContext";

// const orms = [
//   {
//     id: "prisma",
//     name: "Prisma",
//     description: "Modern TypeScript ORM for SQL databases",
//   },
//   {
//     id: "typeorm",
//     name: "TypeORM",
//     description: "ORM for TypeScript and JavaScript (supports SQL databases)",
//   },
//   {
//     id: "objection",
//     name: "Objection.js",
//     description: "SQL-friendly ORM built on top of Knex.js",
//   },
//   {
//     id: "mikro-orm",
//     name: "MikroORM",
//     description: "TypeScript ORM for SQL and NoSQL databases",
//   },
//   {
//     id: "sequelize",
//     name: "Sequelize",
//     description: "Promise-based ORM for Node.js (PostgreSQL, MySQL, etc.)",
//   },
//   {
//     id: "mongoose",
//     name: "Mongoose",
//     description: "Elegant ODM for MongoDB and Node.js",
//   },
//   {
//     id: "drizzle",
//     name: "Drizzle ORM",
//     description: "Lightweight TypeScript SQL ORM with compile-time safety",
//   },
//   {
//     id: "kysely",
//     name: "Kysely",
//     description: "Type-safe and composable SQL query builder for TypeScript",
//   },
// ];

// export function OrmSelect() {
//   const id = useId();
//   const {config, setConfig} = useProject()
//   const [open, setOpen] = useState<boolean>(false);
//   const [value, setValue] = useState<string>("");

//   const handleORMSelect = (currentValue: string) => {
//     const [filtered] = orms.filter((o) => o.name === currentValue)
//     setConfig({
//         ...config,
//         orm: filtered.id
//     })
//     setValue(currentValue === value ? "" : currentValue);
//     setOpen(false);
//   };

//   return (
//     <div className="*:not-first:mt-2">
//       <Label htmlFor={id}>Select an ORM</Label>
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button
//             id={id}
//             variant="outline"
//             role="combobox"
//             aria-expanded={open}
//             className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
//           >
//             <span className={cn("truncate", !value && "text-muted-foreground")}>
//               {value
//                 ? orms.find((orm) => orm.name === value)?.name
//                 : "Select Orm"}
//             </span>
//             <ChevronDownIcon
//               size={16}
//               className="text-muted-foreground/80 shrink-0"
//               aria-hidden="true"
//             />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent
//           className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
//           align="start"
//         >
//           <Command>
//             <CommandInput placeholder="Search ORM..." />
//             <CommandList>
//               <CommandEmpty>No orm found.</CommandEmpty>
//               <CommandGroup>
//                 {orms.map((orm) => (
//                   <CommandItem
//                     key={orm.id}
//                     value={orm.name}
//                     onSelect={(currentValue) => handleORMSelect(currentValue)}
//                   >
//                     {orm.name}
//                     {value === orm.name && (
//                       <CheckIcon size={16} className="ml-auto" />
//                     )}
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "./ui/scroll-area";
import ORMRadioGroup from "./ORMRadioGroup";

export default function ORMs() {
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
            ORMs
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-2">
            <ScrollArea className="h-72 w-full">
              <div className="flex flex-col space-y-4 w-full">
                <ORMRadioGroup />
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
