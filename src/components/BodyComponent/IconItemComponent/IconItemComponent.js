import "./IconItemComponent.css";

function IconItemComponent(props) {
    const {mouseOver, idAttr, classesAttr } = props;

    return (
        <i id={idAttr} className={classesAttr} onMouseOver={mouseOver}></i>
    );
}

export default IconItemComponent;