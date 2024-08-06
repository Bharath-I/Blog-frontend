const Error = ({ message }) => {
  return (
    <div
      className="error-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "red",
        fontWeight: "bold",
      }}
    >
      <p>{message}</p>
    </div>
  );
};

export default Error;
