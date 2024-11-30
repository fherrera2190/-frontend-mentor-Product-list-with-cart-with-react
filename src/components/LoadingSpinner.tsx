export const LoadingSpinner = () => {
  return (
    <div className="text-center mt-3">
      <div
        className="spinner-border text-primary spinner-border-sm"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
