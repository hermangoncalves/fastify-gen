import { CommandGenerator } from "@/components/CommandGenerator";
import { FileTree } from "@/components/FileTree";
import { Navbar } from "@/components/navbar";
import { ProjectForm } from "@/components/ProjectForm";

export default function Index() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container mx-auto">
          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <ProjectForm />
              <CommandGenerator />
            </div>
            <FileTree />
          </div>
        </div>
      </main>
    </div>
  );
}
