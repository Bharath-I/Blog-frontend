const Loading = () => {
  return (
    <div
      className="loading-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p> Loading...</p>
    </div>
  );
};

export default Loading;
