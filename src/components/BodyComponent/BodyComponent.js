import { useCallback, useEffect, useState } from "react";
import "./BodyComponent.css";

import IconItemComponent from "./IconItemComponent/IconItemComponent";
import DynamicContentComponent from "./DynamicContentComponent/DynamicContentComponent";

function BodyComponent(props) {
  const { user, active, setActive } = props;
  
  const initialIconSize = window.innerWidth <= 600 ? "fa-2x" : "fa-3x";
  const [iconSize, setIconSize] = useState(initialIconSize);

  useEffect(() => {
    function resizeHandler() {
      if (window.innerWidth <= 600) {
        setIconSize("fa-2x");
      } else {
        setIconSize("fa-3x");
      }
    }
    window.addEventListener("resize", resizeHandler);
  });

  const mouseOverHandler = useCallback(
    (event) => {
      if (typeof user[event.target.id] != "undefined") {
        Array.from(document.querySelectorAll(".IconItem")).forEach((el) =>
          el.classList.remove("active")
        );
        event.target.classList.add("active");
        setActive(user[event.target.id]);
      }
    },
    [setActive, user]
  );

  return (
    <section className="Body">
      <DynamicContentComponent text={active.text} value={active.value} />
      <div className="Body__icons-bar">
        <IconItemComponent
          idAttr="fullName"
          classesAttr={"IconItem fas " + iconSize + " fa-user"}
          mouseOver={mouseOverHandler}
        />
        <IconItemComponent
          idAttr="email"
          classesAttr={"IconItem fas " + iconSize + " fa-envelope"}
          mouseOver={mouseOverHandler}
        />
        <IconItemComponent
          idAttr="birthDate"
          classesAttr={"IconItem fas " + iconSize + " fa-calendar"}
          mouseOver={mouseOverHandler}
        />
        <IconItemComponent
          idAttr="address"
          classesAttr={"IconItem fas " + iconSize + " fa-map-marked"}
          mouseOver={mouseOverHandler}
        />
        <IconItemComponent
          idAttr="phone"
          classesAttr={"IconItem fas " + iconSize + " fa-phone"}
          mouseOver={mouseOverHandler}
        />
        <IconItemComponent
          idAttr="password"
          classesAttr={"IconItem fas " + iconSize + " fa-lock"}
          mouseOver={mouseOverHandler}
        />
      </div>
    </section>
  );
}

export default BodyComponent;
