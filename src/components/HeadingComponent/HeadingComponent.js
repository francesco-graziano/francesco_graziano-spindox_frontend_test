import "./HeadingComponent.css";

function HeadingComponent(props) {
  const { imgUrl, altAttr } = props;
  return (
    <section className="Heading">
      <img className="Heading__image" src={imgUrl} alt={altAttr} />
    </section>
  );
}

export default HeadingComponent;