import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  getMcqQuestions,
  readingPassages,
  SECTIONS,
  type ExamProgress,
  type SectionId,
} from '../data';
import { useCountdown } from '../hooks/useCountdown';
import { Timer } from './Timer';
import { Results, scoreMcq } from './Results';

interface Props {
  sectionId: SectionId;
  saved?: ExamProgress;
  onSave: (p: ExamProgress) => void;
  onHome: () => void;
  onClear: () => void;
}

export function SectionExam({
  sectionId,
  saved,
  onSave,
  onHome,
  onClear,
}: Props) {
  const meta = SECTIONS.find((s) => s.id === sectionId)!;
  const questions = useMemo(() => getMcqQuestions(sectionId), [sectionId]);
  const totalTime = meta.timeMinutes * 60;

  const [answers, setAnswers] = useState<Record<string, number | null>>(
    () =>
      saved?.answers ??
      Object.fromEntries(questions.map((q) => [q.id, null])),
  );
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(!!saved?.submitted);
  const [result, setResult] = useState(saved?.results);
  const [startedAt] = useState(saved?.startedAt ?? new Date().toISOString());

  const handleExpire = useCallback(() => {
    setSubmitted((was) => {
      if (was) return was;
      return true;
    });
  }, []);

  const { seconds, setSeconds } = useCountdown(
    saved?.remainingSeconds ?? totalTime,
    !submitted,
    handleExpire,
  );

  // Persist periodically
  useEffect(() => {
    if (submitted && result) return;
    onSave({
      sectionId,
      answers,
      startedAt,
      remainingSeconds: seconds,
      submitted,
      results: result,
    });
  }, [answers, seconds, submitted, result, sectionId, startedAt, onSave]);

  // Score when submitting / time expires
  useEffect(() => {
    if (!submitted) return;
    if (result) return;
    const r = scoreMcq(questions, answers);
    setResult(r);
    onSave({
      sectionId,
      answers,
      startedAt,
      remainingSeconds: seconds,
      submitted: true,
      results: r,
    });
  }, [submitted, result, questions, answers, sectionId, startedAt, seconds, onSave]);

  const answeredCount = Object.values(answers).filter((a) => a !== null).length;

  const submit = () => {
    if (
      answeredCount < questions.length &&
      !window.confirm(
        `You have answered ${answeredCount} of ${questions.length}. Submit anyway?`,
      )
    ) {
      return;
    }
    setSubmitted(true);
  };

  const retake = () => {
    onClear();
    const blank = Object.fromEntries(questions.map((q) => [q.id, null]));
    setAnswers(blank);
    setResult(undefined);
    setSubmitted(false);
    setCurrent(0);
    setSeconds(totalTime);
  };

  if (submitted && result) {
    return (
      <Results
        title={meta.shortTitle}
        questions={questions}
        answers={answers}
        result={result}
        onHome={onHome}
        onRetake={retake}
      />
    );
  }

  const q = questions[current];
  const passage =
    sectionId === 'reading' && q.passageId
      ? readingPassages.find((p) => p.id === q.passageId)
      : undefined;

  // Group reading: show passage for current question
  return (
    <div className="page exam">
      <header className="exam-bar">
        <div>
          <button type="button" className="btn ghost small" onClick={onHome}>
            ← Home
          </button>
          <h1>{meta.shortTitle}</h1>
        </div>
        <Timer seconds={seconds} />
        <div className="progress-wrap">
          <div className="progress-label">
            Progress: {answeredCount}/{questions.length}
          </div>
          <div className="progress-bar" aria-hidden>
            <div
              style={{
                width: `${(answeredCount / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </header>

      <div className={`exam-body ${passage ? 'with-passage' : ''}`}>
        {passage && (
          <aside className="passage-panel">
            <p className="passage-type">
              {passage.type === 'fiction' ? 'Fiction' : 'Non-fiction'}
            </p>
            <h2>{passage.title}</h2>
            {passage.text.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </aside>
        )}

        <main className="question-panel">
          <p className="q-num">
            Question {q.number} of {questions.length}
          </p>
          <p className="prompt">{q.prompt}</p>
          {q.visual && (
            <div
              className="visual"
              dangerouslySetInnerHTML={{ __html: q.visual }}
            />
          )}
          <fieldset className="options">
            <legend className="sr-only">Choose an answer</legend>
            {q.options.map((opt, i) => (
              <label key={i} className={answers[q.id] === i ? 'selected' : ''}>
                <input
                  type="radio"
                  name={q.id}
                  checked={answers[q.id] === i}
                  onChange={() =>
                    setAnswers((prev) => ({ ...prev, [q.id]: i }))
                  }
                />
                <span className="opt-letter">
                  {String.fromCharCode(65 + i)}.
                </span>
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          <div className="nav-row">
            <button
              type="button"
              className="btn secondary"
              disabled={current === 0}
              onClick={() => setCurrent((c) => c - 1)}
            >
              Previous
            </button>
            {current < questions.length - 1 ? (
              <button
                type="button"
                className="btn primary"
                onClick={() => setCurrent((c) => c + 1)}
              >
                Next
              </button>
            ) : (
              <button type="button" className="btn primary" onClick={submit}>
                Submit section
              </button>
            )}
          </div>
        </main>
      </div>

      <nav className="q-strip" aria-label="Question navigator">
        {questions.map((qq, i) => (
          <button
            key={qq.id}
            type="button"
            className={`q-dot ${i === current ? 'current' : ''} ${
              answers[qq.id] !== null ? 'answered' : ''
            }`}
            onClick={() => setCurrent(i)}
          >
            {qq.number}
          </button>
        ))}
        <button type="button" className="btn secondary small" onClick={submit}>
          Submit early
        </button>
      </nav>
    </div>
  );
}
