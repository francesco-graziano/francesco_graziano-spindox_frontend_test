import "./DynamicContentComponent.css";
function DynamicContentComponent(props) {
  const {text, value} = props;
  return (
    <div className="DynamicContent">
      <h3 className="DynamicContent__text">{text}</h3>
      <h2 className="DynamicContent__value">{value}</h2>
    </div>
  );
}

export default DynamicContentComponent;