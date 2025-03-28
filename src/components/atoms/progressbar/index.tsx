function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-3 bg-black/60 border border-yellow-500/50 rounded-sm">
      <div
        className="top-0 left-0 h-full bg-gradient-to-r from-yellow-300 to-yellow-900 transition-all duration-300"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
}

export default ProgressBar;
