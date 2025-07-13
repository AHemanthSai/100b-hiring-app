import candidates from './data/candidates.json';
import { scoreCandidate } from './utils/scorer';

function App() {
  const scored = candidates.map(c => ({
    ...c,
    ...scoreCandidate(c)
  }));

  const top5 = [...scored]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🚀 Top 5 Hires</h1>

      {top5.map((c, i) => (
        <div key={i} className="bg-white shadow-md rounded-xl p-4 mb-4 border">
          <h2 className="text-xl font-semibold mb-2">{c.name || "Unnamed"}</h2>
          <div className="text-sm text-gray-700">
            <p><strong>Role:</strong> {c.role || "N/A"}</p>
            <p><strong>Experience:</strong> {c.experience || "N/A"} years</p>
            <p><strong>Skills:</strong> {c.skills || "N/A"}</p>
            <p><strong>Location:</strong> {c.location || "N/A"}</p>
            <p><strong>Gender:</strong> {c.gender || "N/A"}</p>
            <p><strong>Score:</strong> {c.score}</p>
            <p><strong>Reasons:</strong> {c.reasons.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
