import FantasyTeamNameGeneratorContent from "../components/fantasy-team-generator-content"
import FantasyTeamNameGenerator from "../components/fantasy-team-name-generator"



const FantasyTeamNameGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-[#f6f0e6] px-4 py-10">
         <FantasyTeamNameGenerator/>
         <FantasyTeamNameGeneratorContent/>
    </div>
  )
}

export default FantasyTeamNameGeneratorPage