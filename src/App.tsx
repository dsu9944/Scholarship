import { useCallback, useState } from 'react';
import { Home } from './components/Home';
import { SectionExam } from './components/SectionExam';
import { WrittenExam } from './components/WrittenExam';
import { AnswerKey } from './components/AnswerKey';
import { useExamStorage } from './hooks/useExamStorage';
import type { ExamProgress, SectionId } from './data';
import './App.css';

type View = 'home' | 'exam' | 'answer-key';

export default function App() {
  const { store, getProgress, saveProgress, clearSection, clearAll } =
    useExamStorage();
  const [view, setView] = useState<View>('home');
  const [sectionId, setSectionId] = useState<SectionId | null>(null);

  const start = (id: SectionId) => {
    setSectionId(id);
    setView('exam');
  };

  const goHome = () => {
    setView('home');
    setSectionId(null);
  };

  const onSave = useCallback(
    (p: ExamProgress) => {
      saveProgress(p);
    },
    [saveProgress],
  );

  if (view === 'answer-key') {
    return <AnswerKey onHome={goHome} />;
  }

  if (view === 'exam' && sectionId) {
    if (sectionId === 'written') {
      return (
        <WrittenExam
          saved={getProgress('written')}
          onSave={onSave}
          onHome={goHome}
          onClear={() => clearSection('written')}
        />
      );
    }
    return (
      <SectionExam
        sectionId={sectionId}
        saved={getProgress(sectionId)}
        onSave={onSave}
        onHome={goHome}
        onClear={() => clearSection(sectionId)}
      />
    );
  }

  return (
    <Home
      onStart={start}
      onAnswerKey={() => setView('answer-key')}
      onClearAll={() => {
        if (window.confirm('Clear all saved section progress?')) clearAll();
      }}
      store={store}
    />
  );
}
