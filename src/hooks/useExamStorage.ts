import { useCallback, useEffect, useState } from 'react';
import { STORAGE_KEY, type ExamProgress, type SectionId } from '../data';

type Store = Partial<Record<SectionId, ExamProgress>>;

function readStore(): Store {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Store;
  } catch {
    return {};
  }
}

function writeStore(store: Store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function useExamStorage() {
  const [store, setStore] = useState<Store>(() => readStore());

  useEffect(() => {
    writeStore(store);
  }, [store]);

  const getProgress = useCallback(
    (id: SectionId) => store[id],
    [store],
  );

  const saveProgress = useCallback((progress: ExamProgress) => {
    setStore((prev) => ({ ...prev, [progress.sectionId]: progress }));
  }, []);

  const clearSection = useCallback((id: SectionId) => {
    setStore((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setStore({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { store, getProgress, saveProgress, clearSection, clearAll };
}
