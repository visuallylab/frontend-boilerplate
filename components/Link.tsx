import React from 'react';

type Props = {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

const Link: React.FunctionComponent<Props> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href='#'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
