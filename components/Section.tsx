import React from 'react';

type Props = {
  title: string;
};

const Section: React.FunctionComponent<Props> = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div>{children}</div>
      <style jsx={true}>{`
        section {
          height: 60vh;
        }
        h1 {
          text-align: center;
        }
        div {
          max-width: 900px;
          padding: 0 12px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default Section;
