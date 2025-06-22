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
          <div className="my-14 flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2">
            <div className="flex flex-col space-y-8">
              <ProjectForm />
              <FileTree />
            </div>
            <CommandGenerator />
          </div>
        </div>
      </main>
    </div>
  );
}
