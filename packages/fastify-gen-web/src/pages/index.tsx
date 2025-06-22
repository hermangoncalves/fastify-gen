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
          <h1 className="text-center mt-8 md:text-lg">
            Choose your options below and we'll generate the command you can use
            to create your project.
          </h1>
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
