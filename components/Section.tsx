import React from 'react';

interface IProps {
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
  title?: string;
  desc?: string[];
}

const Section: React.FunctionComponent<IProps> = ({
  children,
  title = '',
  textAlign = 'left',
  fullscreen = false,
  first = false,
  alignItems = 'center',
}) => (
  <section className={`py align w-100 ${fullscreen ? 'h-100' : ''}`}>
    <h1>{title}</h1>
    {children}
    <style jsx={true}>{`
      .h-100 {
        height: 100vh;
        box-sizing: border-box;
      }
      .w-100 {
        width: 100%;
      }
      .py {
        padding-top: ${first ? 'calc(8vh + 64px)' : '8vh'};
        padding-bottom: 8vh;
      }
      .align {
        display: flex;
        justify-content: center;
        align-items: ${alignItems};
        text-align: ${textAlign};
      }
    `}</style>
  </section>
);

export default Section;
