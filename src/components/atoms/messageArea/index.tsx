const messageArea = ({ message }: { message: string }) => {
  return (
    <div className="p-4 bg-black/60 border border-yellow-500/30 rounded-sm">
      {message}
    </div>
  );
};
export default messageArea;
