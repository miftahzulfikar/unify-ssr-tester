import React, { useRef } from "react";
import TooltipV2 from "unify-react-desktop/build/TooltipV2";
import { css } from "react-emotion";

const _center = css`
  position: fixed;
  top: 50%;
  left: 50%;
`;

const _link = css`
  cursor: pointer;
  outline: none;
  padding: 8px;
  margin: 8px;
  border: solid 1px #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
`;

export default function () {
  const targetRef = useRef();
  const props = {
    placement: "bottom",
    trigger: "hover",
    onMouseEnter: console.log("onMouseEnter"),
    onMouseLeave: console.log("onMouseLeave"),
    onClick: console.log("onClick"),
  };
  return (
    <div className={_center}>
      <button className={_link} ref={targetRef}>
        Hover Me
      </button>
      <TooltipV2 targetRef={targetRef} {...props}>
        Make Tooltip as brief as possible. no 2 lines
      </TooltipV2>
    </div>
  );
}
