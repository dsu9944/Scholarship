import { formatTime } from '../hooks/useCountdown';

interface Props {
  seconds: number;
  warningUnder?: number;
}

export function Timer({ seconds, warningUnder = 300 }: Props) {
  const urgent = seconds <= warningUnder;
  return (
    <div
      className={`timer ${urgent ? 'urgent' : ''}`}
      role="timer"
      aria-live="polite"
      aria-label={`Time remaining ${formatTime(seconds)}`}
    >
      <span className="timer-label">Time left</span>
      <span className="timer-value">{formatTime(seconds)}</span>
    </div>
  );
}
