import { Row } from 'react-styled-flexboxgrid';
import Paragraph, { IParagraph } from './Paragraph';
import { getRelativePath } from '@/utils';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  width: 100%;
  padding: 40px 0 30px;
`;

const Paragraphs: React.FC<{ data: IParagraph[] }> = ({ data }) => (
  <StyledRow style={{ width: '100%', padding: '40px 0 30px' }}>
    {data.map(p => (
      <Paragraph
        color={p.color}
        key={p.title}
        icon={p.icon ? getRelativePath(p.icon) : undefined}
        title={p.title}
        description={p.description}
      />
    ))}
  </StyledRow>
);

export default Paragraphs;
