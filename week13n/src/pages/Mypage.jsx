import styled from 'styled-components';
import { useUserInfo } from '../context/UserInfoContext';
import { Card, Title, Wrapper } from '../components/layout/common';

export const Mypage = () => {
  const { state } = useUserInfo();

  return (
    <Wrapper>
      <Card>
        <Title>My page</Title>
        <InfoRow>
          <InfoLabel>이름</InfoLabel>
          <InfoValue>{state.name}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>이메일</InfoLabel>
          <InfoValue>{state.email}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>생년월일</InfoLabel>
          <InfoValue>{state.birth}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>성별</InfoLabel>
          <InfoValue>{state.gender}</InfoValue>
        </InfoRow>
      </Card>
    </Wrapper>
  )
}

export default Mypage

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e4e4e7;
`;

const InfoLabel = styled.span`
  color: #71717a;
  font-size: 14px;
`;

const InfoValue = styled.span`
  color: #18181b;
  font-size: 14px;
  font-weight: 500;
`;