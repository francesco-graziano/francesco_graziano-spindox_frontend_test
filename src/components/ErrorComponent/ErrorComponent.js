import "./ErrorComponent.css";

function ErrorComponent(props) {
  const { errorText } = props;
  return (
    <div className="Error">
      <h1>{errorText}</h1>
    </div>
  );
}

export default ErrorComponent;
