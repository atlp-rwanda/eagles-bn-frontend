/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import propTypes from 'prop-types';
import React, { useState } from 'react';
import '../styles/Tooltip.scss';

const Tooltip = ({ delay, children, content, direction, onClick }) => {
  let timeout;
  const [active, setActive] = useState(false);
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };
  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  return (
    <div onClick={onClick} className="Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && <div className={`Tooltip-Tip ${direction}`}>{content}</div>}
    </div>
  );
};

Tooltip.propTypes = {
  onClick: propTypes.func,
  delay: propTypes.number,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  content: propTypes.string.isRequired,
  direction: propTypes.string,
};

Tooltip.defaultProps = {
  delay: 40,
  direction: 'bottom',
  onClick: () => null,
};

export default Tooltip;
