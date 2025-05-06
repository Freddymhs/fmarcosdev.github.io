const messageArea = ({ message }: { message: string }) => {
  return (
    <div className="p-4 bg-[var(--color-secondary-color)] border border-[var(--color-primary-color)]/30 rounded-sm">
      {message}
    </div>
  );
};
export default messageArea;
