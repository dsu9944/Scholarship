import { useCallback, useEffect, useState } from 'react';
import { writtenStimulus, type ExamProgress } from '../data';
import { useCountdown } from '../hooks/useCountdown';
import { Timer } from './Timer';

interface Props {
  saved?: ExamProgress;
  onSave: (p: ExamProgress) => void;
  onHome: () => void;
  onClear: () => void;
}

export function WrittenExam({ saved, onSave, onHome, onClear }: Props) {
  const totalTime = writtenStimulus.timeMinutes * 60;
  const [text, setText] = useState(saved?.writtenText ?? '');
  const [submitted, setSubmitted] = useState(!!saved?.submitted);
  const [showRubric, setShowRubric] = useState(!!saved?.submitted);
  const [startedAt] = useState(saved?.startedAt ?? new Date().toISOString());

  const handleExpire = useCallback(() => {
    setSubmitted(true);
    setShowRubric(true);
  }, []);

  const { seconds, setSeconds } = useCountdown(
    saved?.remainingSeconds ?? totalTime,
    !submitted,
    handleExpire,
  );

  useEffect(() => {
    onSave({
      sectionId: 'written',
      answers: {},
      writtenText: text,
      startedAt,
      remainingSeconds: seconds,
      submitted,
    });
  }, [text, seconds, submitted, startedAt, onSave]);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const submit = () => {
    if (
      !text.trim() &&
      !window.confirm('The writing box is empty. Submit anyway?')
    ) {
      return;
    }
    setSubmitted(true);
    setShowRubric(true);
  };

  const retake = () => {
    onClear();
    setText('');
    setSubmitted(false);
    setShowRubric(false);
    setSeconds(totalTime);
  };

  return (
    <div className="page exam written">
      <header className="exam-bar">
        <div>
          <button type="button" className="btn ghost small" onClick={onHome}>
            ← Home
          </button>
          <h1>Written Expression</h1>
        </div>
        {!submitted && <Timer seconds={seconds} />}
        <div className="progress-wrap">
          <div className="progress-label">{wordCount} words</div>
        </div>
      </header>

      <div className="written-layout">
        <section className="card stimulus">
          <p className="eyebrow">
            {writtenStimulus.type === 'persuasive' ? 'Persuasive' : 'Narrative'}{' '}
            · {writtenStimulus.timeMinutes} minutes
          </p>
          <h2>{writtenStimulus.title}</h2>
          <div className="stimulus-body">
            {writtenStimulus.stimulus.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="card writing-area">
          <label htmlFor="we-text">
            <strong>Your writing</strong>
            {submitted && ' (submitted — parent can still edit notes below)'}
          </label>
          <textarea
            id="we-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            readOnly={submitted}
            rows={16}
            placeholder="Plan briefly, then write here…"
          />
          {!submitted ? (
            <div className="nav-row">
              <button type="button" className="btn primary" onClick={submit}>
                Submit writing
              </button>
              <button type="button" className="btn secondary" onClick={submit}>
                Submit early
              </button>
            </div>
          ) : (
            <div className="nav-row">
              <button type="button" className="btn secondary" onClick={retake}>
                Retake
              </button>
              <button type="button" className="btn primary" onClick={onHome}>
                Back to home
              </button>
            </div>
          )}
        </section>

        {(showRubric || submitted) && (
          <section className="card rubric">
            <h2>Parent marking rubric</h2>
            <p>
              This section is <strong>not auto-scored</strong>. Read Alexia’s
              piece together and circle a level for each criterion (out of 5).
              Total out of 20.
            </p>
            {writtenStimulus.rubric.map((c) => (
              <div key={c.name} className="rubric-block">
                <h3>{c.name}</h3>
                <ul>
                  {c.levels.map((lv) => (
                    <li key={lv.score}>
                      <strong>{lv.score}</strong> — {lv.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="tip">
              Tip: comment on one strength and one next step. Keep the tone
              encouraging — Year 4 stretch work.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
