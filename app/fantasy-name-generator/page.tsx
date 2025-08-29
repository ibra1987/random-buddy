
import { Skull, Ghost, Bug, Flame } from "lucide-react";
import FantasyNameGenerator from "../components/fantasy-name-generator";
import FantasyNameGeneratorSections from "../components/fantasy-name-content";




export default function FantasyNameGeneratorPage() {


  return (
    <div className="min-h-screen  flex flex-col items-center space-y-6 pt-10 ">
      {/* Header */}
      <div className="flex  items-center gap-3 mb-6">
        <Skull size={36} className="text-red-500" />
        <h1 className="text-3xl font-bold">Fantasy Name Generator</h1>
        <Ghost size={36} className="text-blue-400" />
      </div>

{/* Form Component */}
   <FantasyNameGenerator/>
   <FantasyNameGeneratorSections/>

      {/* Footer */}
      <div className="mt-10 flex items-center gap-2 text-gray-400">
        <Bug size={18} />
        <span>Made with Horror & Lucide Icons</span>
        <Flame size={18} className="text-red-600" />
      </div>
    </div>
  );
}
