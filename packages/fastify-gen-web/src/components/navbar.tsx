import GithubCorner from "./github-icon";

export function Navbar() {
  return (
    <header className="">
      <div className="container mx-auto px-6 py-4 bg-background flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FG</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100">
              Fastify Generator
            </h1>
            <p className="text-slate-400 text-sm">
              Visual interface to generate Fastify projects
            </p>
          </div>
        </div>
        <div>
          <GithubCorner />
        </div>
      </div>
    </header>
  );
}
