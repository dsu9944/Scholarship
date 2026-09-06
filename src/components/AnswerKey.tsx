import {
  abstractQuestions,
  mathematicsQuestions,
  readingPassages,
  readingQuestions,
  writtenStimulus,
} from '../data';

interface Props {
  onHome: () => void;
}

function KeyBlock({
  title,
  questions,
}: {
  title: string;
  questions: typeof abstractQuestions;
}) {
  return (
    <section className="key-section">
      <h2>{title}</h2>
      <ol>
        {questions.map((q) => (
          <li key={q.id}>
            <strong>Q{q.number}.</strong> {q.options[q.correctIndex]}{' '}
            <span className="letter">
              ({String.fromCharCode(65 + q.correctIndex)})
            </span>
            <br />
            <span className="explain">{q.explanation}</span>
            <br />
            <em className="skill-tag">{q.skill}</em>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function AnswerKey({ onHome }: Props) {
  return (
    <div className="page answer-key">
      <header className="no-print">
        <button type="button" className="btn ghost" onClick={onHome}>
          ← Home
        </button>
        <button
          type="button"
          className="btn primary"
          onClick={() => window.print()}
        >
          Print
        </button>
      </header>
      <h1>Answer Key — Scholarship Practice Year 5 (AAS-style)</h1>
      <p className="disclaimer">
        Practice only — not an official AAS paper. Original content.
      </p>

      <KeyBlock
        title="1. Abstract Reasoning & Problem Solving (28)"
        questions={abstractQuestions}
      />
      <KeyBlock
        title="2. Mathematics Achievement & Reasoning (28)"
        questions={mathematicsQuestions}
      />

      <section className="key-section">
        <h2>3. Reading Comprehension (22)</h2>
        {readingPassages.map((p) => (
          <div key={p.id}>
            <h3>
              Passage: {p.title} ({p.type})
            </h3>
            <ol>
              {readingQuestions
                .filter((q) => q.passageId === p.id)
                .map((q) => (
                  <li key={q.id}>
                    <strong>Q{q.number}.</strong> {q.options[q.correctIndex]}{' '}
                    <span className="letter">
                      ({String.fromCharCode(65 + q.correctIndex)})
                    </span>
                    <br />
                    <span className="explain">{q.explanation}</span>
                  </li>
                ))}
            </ol>
          </div>
        ))}
      </section>

      <section className="key-section">
        <h2>4. Written Expression — parent rubric</h2>
        <p>
          <strong>{writtenStimulus.title}</strong> ({writtenStimulus.type})
        </p>
        <p>No single correct answer. Mark with the rubric (ideas, organisation,
          vocabulary, conventions) — each out of 5, total /20.</p>
      </section>
    </div>
  );
}
