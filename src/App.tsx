import { BookOpen, Github } from 'lucide-react';

interface Technique {
  id: number;
  name: string;
  definition: string;
  rationale: string;
  example: string;
}

const techniques: Technique[] = [
  {
    id: 1,
    name: 'Role Assignment',
    definition: 'Tell the model who it should act as',
    rationale: 'Sets context and shapes tone, style, and depth of response',
    example: '❌ "Explain recursion."\n✅ "You are a computer science professor. Explain recursion to a beginner."'
  },
  {
    id: 2,
    name: 'Few-Shot Prompting',
    definition: 'Provide examples of the task before asking the model to perform it',
    rationale: 'Helps model learn pattern and format from concrete examples',
    example: 'Q: Translate "Hello" to Spanish\nA: Hola\n\nQ: Translate "Goodbye" to Spanish\nA: Adiós\n\nQ: Translate "Thank you" to Spanish\nA: [model completes]'
  },
  {
    id: 3,
    name: 'Chain-of-Thought (CoT)',
    definition: 'Ask the model to reason step by step before giving final answer',
    rationale: 'Reduces errors in complex reasoning by making intermediate steps visible',
    example: '"Solve this problem. Explain your reasoning step by step before giving the final answer."'
  },
  {
    id: 4,
    name: 'Self-Consistency',
    definition: 'Generate multiple reasoning paths and select the most consistent answer',
    rationale: 'Avoids relying on single potentially flawed reasoning path',
    example: '"Give three different ways to solve this problem, then identify which answer appears most often."'
  },
  {
    id: 5,
    name: 'Scoring / Ranking',
    definition: 'Generate multiple outputs and have the model evaluate and rank them',
    rationale: 'Improves quality by leveraging model\'s ability to critique its own work',
    example: '"Generate 3 marketing slogans. Then score each from 1–5 on creativity and clarity."'
  },
  {
    id: 6,
    name: 'Reflexion / Self-Critique',
    definition: 'Ask model to review and refine its own output',
    rationale: 'Encourages error detection and iterative improvement',
    example: '"Draft an answer to this question. Then review your answer and improve it."'
  },
  {
    id: 7,
    name: 'Multi-Step Prompting',
    definition: 'Break complex task into sequential smaller steps',
    rationale: 'Makes complex workflows more reliable and easier to debug',
    example: 'Step 1: "List key themes in this text"\nStep 2: "For each theme, find supporting quotes"\nStep 3: "Summarize the main argument"'
  },
  {
    id: 8,
    name: 'Reframing / Style Transfer',
    definition: 'Ask model to rewrite content in a different style or for different audience',
    rationale: 'Adapts complexity and tone for specific contexts or readers',
    example: '"Rewrite this technical explanation for a 10-year-old."'
  },
  {
    id: 9,
    name: 'External Knowledge Grounding',
    definition: 'Provide relevant documents or data before asking questions',
    rationale: 'Reduces hallucination by anchoring responses in provided facts',
    example: '"Based on the following document: [paste text]\n\nQuestion: What are the key findings?"'
  }
];

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f4f3ee' }}>
      {/* Hero Section */}
      <header className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen size={40} style={{ color: '#c15f3c' }} strokeWidth={2} />
            <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: '#c15f3c' }}>
              Prompt Engineering Cheat Sheet
            </h1>
          </div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#5a5a5a' }}>
            A concise collection of prompt engineering techniques with definitions, explanations, and examples.
            Perfect for quick reference while working with LLMs.
          </p>
        </div>
      </header>

      {/* Techniques Section */}
      <main className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto rounded-lg shadow-lg" style={{ backgroundColor: '#ffffff' }}>
            <table className="w-full">
              <thead style={{ backgroundColor: '#c15f3c' }}>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#ffffff' }}>#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#ffffff' }}>Technique</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#ffffff' }}>What it is</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#ffffff' }}>Why it works</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold" style={{ color: '#ffffff' }}>Example</th>
                </tr>
              </thead>
              <tbody>
                {techniques.map((technique, index) => (
                  <tr
                    key={technique.id}
                    className="transition-colors hover:bg-opacity-50"
                    style={{
                      borderBottom: index < techniques.length - 1 ? '1px solid #b1ada1' : 'none',
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#fafaf8'
                    }}
                  >
                    <td className="px-6 py-4 font-semibold" style={{ color: '#c15f3c' }}>
                      {technique.id}
                    </td>
                    <td className="px-6 py-4 font-semibold" style={{ color: '#2a2a2a' }}>
                      {technique.name}
                    </td>
                    <td className="px-6 py-4 text-sm" style={{ color: '#4a4a4a' }}>
                      {technique.definition}
                    </td>
                    <td className="px-6 py-4 text-sm" style={{ color: '#4a4a4a' }}>
                      {technique.rationale}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono whitespace-pre-line" style={{ color: '#3a3a3a' }}>
                      {technique.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {techniques.map((technique) => (
              <div
                key={technique.id}
                className="rounded-lg shadow-lg p-6 space-y-4"
                style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #c15f3c' }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold" style={{ color: '#c15f3c' }}>
                    {technique.id}
                  </span>
                  <h3 className="text-xl font-bold flex-1" style={{ color: '#2a2a2a' }}>
                    {technique.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#c15f3c' }}>
                      What it is
                    </h4>
                    <p className="text-sm" style={{ color: '#4a4a4a' }}>
                      {technique.definition}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#c15f3c' }}>
                      Why it works
                    </h4>
                    <p className="text-sm" style={{ color: '#4a4a4a' }}>
                      {technique.rationale}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#c15f3c' }}>
                      Example
                    </h4>
                    <p className="text-sm font-mono whitespace-pre-line p-3 rounded" style={{ color: '#3a3a3a', backgroundColor: '#f4f3ee' }}>
                      {technique.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-4 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #b1ada1' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left: Book Attribution */}
          <a
            href="https://www.amazon.es/AI-Engineering-Building-Applications-Foundation/dp/1098166302/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: '#5a5a5a' }}
          >
            <BookOpen size={16} style={{ color: '#c15f3c' }} />
            <span>Prompt techniques extracted from the book <em>'AI Engineer'</em></span>
          </a>

          {/* Right: GitHub Link */}
          <a
            href="https://github.com/fsystemweb/prompt-engineering-cheatsheet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: '#c15f3c' }}
          >
            <Github size={18} />
            <span>Suggest a technique</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
