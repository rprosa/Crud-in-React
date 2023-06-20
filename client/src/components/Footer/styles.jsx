import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 90%;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  background-color: #d1d1d1;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  padding: 4px;
  box-shadow: 3px 1px 1px 2px black;
`;
export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 6rem;
    height: 10rem;
    margin: 3rem;
  }
`;
export const LicenseContainer = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const LicenseText = styled.h3`
  text-align: center;
  color: #105e23;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
`;
