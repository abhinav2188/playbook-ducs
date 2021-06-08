import React from "react";
import { animated, useSpring } from "react-spring";

const WithAnimationLoad = (props) => {
  const styles = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
  });

  return (
    <animated.div style={styles} className={props.className}>
      {props.children}
    </animated.div>
  );
};

export default WithAnimationLoad;
