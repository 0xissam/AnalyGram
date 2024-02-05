import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/MiniCenteredFooter.js";
import heroScreenshotImageSrc from "images/10197785.jpg";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/afordable.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  // const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  // const HighlightedText = tw.span`text-primary-500`;

  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Unlock the power of data with <HighlightedText>AnalyGram .</HighlightedText></>}
        description="Your go-to Instagram analytics tool for powerful insights. AnalyGram helps you understand your audience, optimize content, and boost engagement for a standout online presence."
        imageSrc="https://img.freepik.com/vecteurs-libre/illustration-concept-analyse-ludique_114360-7045.jpg?t=st=1706050301~exp=1706050901~hmac=41f83ab8b9da339e03745c32dea87af2dc6fab1a37af39de40e45289c5e6a981"
        
        imageDecoratorBlob={true}
        primaryButtonText="Get Started"
        watchVideoButtonText="Video Guide"
      />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            Strategic Mastery with AnalyGram Insights <HighlightedText>AnalyGram Insights.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      {/* <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$17.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
          },
          {
            name: "Business",
            price: "$37.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["60 Templates", "15 Landing Pages", "22 Internal Pages", "Priority Assistance"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["90 Templates", "27 Landing Pages", "37 Internal Pages", "Personal Assistance"]
          }
        ]}
      /> */}
      <Pricing 
        heading={<>Flexible <HighlightedText>Plans</HighlightedText></>}
      />
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "As an influencer, AnalyGram is my secret weapon. The competitive benchmarking feature helps me stay ahead, and the customizable dashboard allows me to focus on what matters. It's my go-to tool for tracking growth and engagement. Plus, the sleek design adds a touch of professionalism to my analytics game!",
            customerName: "Sarah",
            customerTitle: "Influencer."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "AnalyGram has revolutionized my Instagram strategy! The detailed analytics provide valuable insights into my audience, helping me tailor content that resonates. The user-friendly interface makes it a breeze to navigate. Highly recommended for anyone serious about maximizing their Instagram presence.",
            customerName: "John",
            customerTitle: "DigitalMarketer"
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "How do I get started with AnalyGram ?",
            answer:
              "Getting started is simple! Visit our website, sign up for an account, and follow the on-screen instructions to set up your preferences. If you have any questions along the way, our support team is here to assist you."
          },
          {
            question: "What makes AnalyGram stand out from the competition?",
            answer:
              "AnalyGram is distinguished by its commitment to innovation, user-friendly interface, and unmatched customer support. We continually strive to exceed industry standards, ensuring you get the best experience possible."
          },
          {
            question: "Are there any hidden fees?",
            answer:
              "No hidden fees here! We believe in transparent pricing. You'll only pay for the services you choose, and our pricing is clearly outlined on our website. No surprises."
          },
          {
            question: "Can I customize my subscription plan?",
            answer:
              "Absolutely! We offer flexible subscription plans to cater to your specific needs. Feel free to customize your plan to include the features that matter most to you."
          },
          {
            question: "How secure is my data with AnalyGram?",
            answer:
              "Security is our top priority. We implement robust measures to safeguard your data, and our systems are regularly updated to meet the highest security standards. Rest assured, your information is in good hands."
          },
          {
            question: "What kind of support can I expect?",
            answer:
              "Our customer support team is available around the clock to assist you. Whether you have technical questions or need guidance on using our services, we're here to help via email."
          }
        ]}
      />
      {/* <GetStarted/> */}
      <Footer />
    </AnimationRevealPage>
  );
}
