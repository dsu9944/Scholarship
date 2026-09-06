import { SECTIONS, type ExamProgress, type SectionId } from '../data';

interface Props {
  onStart: (id: SectionId) => void;
  onAnswerKey: () => void;
  onClearAll: () => void;
  store: Partial<Record<SectionId, ExamProgress>>;
}

export function Home({ onStart, onAnswerKey, onClearAll, store }: Props) {
  const hasAny = Object.keys(store).length > 0;

  return (
    <div className="page home">
      <header className="hero">
        <p className="eyebrow">For Alexia Su · Practice only</p>
        <h1>Scholarship Practice — Year 5 (AAS-style)</h1>
        <p className="lede">
          A parent-friendly mock for Year 5 stretch work toward Year 7 scholarship
          exams (MLC and similar). This is <strong>practice only</strong> — not an
          official Academic Assessment Services (AAS) paper.
        </p>
        <ul className="hero-points">
          <li>Four sections · about <strong>2 hours 25 minutes</strong> if sat as a full mock</li>
          <li>Timers, progress, early submit, and results with explanations</li>
          <li>Progress saved in this browser (localStorage) so you can resume</li>
          <li>Written Expression is marked by a parent using the rubric — not auto-scored</li>
        </ul>
      </header>

      <section className="card tip-card">
        <h2>How to use with Alexia</h2>
        <p>
          She is in Year 4 now — treat this as stretch practice for Year 5 level.
          Start with <strong>one section</strong>, not the full mock. Celebrate effort
          and explanations, not just the percentage. Low scores at this stage are
          information, not a verdict.
        </p>
      </section>

      <section className="sections-grid">
        {SECTIONS.map((s) => {
          const prog = store[s.id];
          let status = 'Not started';
          if (prog?.submitted) status = 'Completed — review results';
          else if (prog && !prog.submitted) status = 'In progress — resume';

          return (
            <article key={s.id} className="card section-card">
              <h2>{s.title}</h2>
              <p className="meta">
                {s.timeMinutes} min ·{' '}
                {s.kind === 'mcq'
                  ? `${s.questionCount} multiple choice`
                  : '1 writing task'}
              </p>
              <p>{s.description}</p>
              <p className={`status ${prog?.submitted ? 'done' : prog ? 'mid' : ''}`}>
                {status}
              </p>
              <button
                type="button"
                className="btn primary"
                onClick={() => onStart(s.id)}
              >
                {prog && !prog.submitted
                  ? 'Resume'
                  : prog?.submitted
                    ? 'Review / Retake'
                    : 'Start section'}
              </button>
            </article>
          );
        })}
      </section>

      <footer className="home-actions">
        <button type="button" className="btn secondary" onClick={onAnswerKey}>
          Answer key (printable)
        </button>
        {hasAny && (
          <button type="button" className="btn ghost" onClick={onClearAll}>
            Clear all saved progress
          </button>
        )}
      </footer>

      <p className="disclaimer">
        Disclaimer: Original practice content inspired by the style of scholarship
        screening (abstract reasoning, maths, reading, written expression). Not
        affiliated with AAS, ACER, or any school. For home practice only.
      </p>
    </div>
  );
}
