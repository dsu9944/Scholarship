import type { McqQuestion, SectionResult } from '../data';

interface Props {
  title: string;
  questions: McqQuestion[];
  answers: Record<string, number | null>;
  result: SectionResult;
  onHome: () => void;
  onRetake: () => void;
}

export function Results({
  title,
  questions,
  answers,
  result,
  onHome,
  onRetake,
}: Props) {
  return (
    <div className="page results">
      <header>
        <h1>Results — {title}</h1>
        <p className="score-line">
          <span className="score-big">{result.percent}%</span>
          <span>
            {result.correct} / {result.total} correct
          </span>
        </p>
        {result.weakSkills.length > 0 && (
          <div className="weak-box">
            <h2>Areas to practise</h2>
            <ul>
              {result.weakSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <ol className="review-list">
        {questions.map((q) => {
          const chosen = answers[q.id];
          const ok = result.byQuestion[q.id];
          return (
            <li key={q.id} className={ok ? 'ok' : 'bad'}>
              <div className="review-head">
                <strong>Q{q.number}</strong>
                <span className="badge">{ok ? 'Correct' : 'Incorrect'}</span>
                <span className="skill-tag">{q.skill}</span>
              </div>
              <p className="prompt">{q.prompt}</p>
              {q.visual && (
                <div
                  className="visual"
                  dangerouslySetInnerHTML={{ __html: q.visual }}
                />
              )}
              <p>
                Your answer:{' '}
                {chosen === null || chosen === undefined
                  ? '— (blank)'
                  : q.options[chosen]}
              </p>
              {!ok && (
                <p>
                  Correct: <strong>{q.options[q.correctIndex]}</strong>
                </p>
              )}
              <p className="explain">{q.explanation}</p>
            </li>
          );
        })}
      </ol>

      <div className="home-actions">
        <button type="button" className="btn primary" onClick={onHome}>
          Back to home
        </button>
        <button type="button" className="btn secondary" onClick={onRetake}>
          Retake section
        </button>
      </div>
    </div>
  );
}

export function scoreMcq(
  questions: McqQuestion[],
  answers: Record<string, number | null>,
): SectionResult {
  const byQuestion: Record<string, boolean> = {};
  const skillMiss: Record<string, number> = {};
  let correct = 0;
  for (const q of questions) {
    const ok = answers[q.id] === q.correctIndex;
    byQuestion[q.id] = ok;
    if (ok) correct += 1;
    else skillMiss[q.skill] = (skillMiss[q.skill] ?? 0) + 1;
  }
  const weakSkills = Object.entries(skillMiss)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([k]) => k);
  const total = questions.length;
  return {
    correct,
    total,
    percent: total ? Math.round((correct / total) * 100) : 0,
    byQuestion,
    weakSkills,
  };
}
