import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <img src="/logo.png" alt="로고" />
      <h1>FC Online 파칭코 시뮬레이터</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  img {
    width: 2.25rem;
    margin-right: 1rem;
  }
`;

export default Header;
