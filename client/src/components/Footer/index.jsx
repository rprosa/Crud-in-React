import {
  FooterContainer,
  SocialContainer,
  LicenseContainer,
  LicenseText,
} from "./styles";

export const FooterComponent = () => {
  return (
    <FooterContainer>
      <SocialContainer>
        <a target="_blank" href="https://github.com/rprosa">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/renan-pantale%C3%A3o-rosa-74491a214/"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
        </a>
      </SocialContainer>
      <LicenseContainer>
        <LicenseText>
        by Renan P.Rosa
        </LicenseText>
      </LicenseContainer>
    </FooterContainer>
  );
};
