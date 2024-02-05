import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/mynlogof.png";
import GitHubButton from "react-github-btn";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";


const Container = tw(ContainerBase)`bg-gray-200 text-gray-700 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-40`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-700 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            {/* <LogoText>Treact</LogoText> */}
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/components/pages/AboutUs">About</Link>
            <Link href="/components/pages/ContactUs">Contact Us</Link>
            <Link href="/components/pages/Pricing">Pricing</Link>
            <Link href="#">FAQ</Link>
          </LinksContainer>
          <SocialLinksContainer>
          <GitHubButton
                    href="https://github.com/0xissam"
                    data-size="large"
                    // data-show-count="true"
                    aria-label="Follow @0xissam on GitHub"
                  >
                    Follow @0xissam
                  </GitHubButton>
                  <GitHubButton
                    href="https://github.com/Demilade362"
                    data-size="large"
                    // data-show-count="true"
                    aria-label="Follow @Demilade362 on GitHub"
                  >
                    Follow @Demilade362
                  </GitHubButton>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, Treact Inc. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
