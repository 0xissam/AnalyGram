import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FAQ from "components/faqs/SingleCol.js";

const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial
        heading="Our Paying Customers"
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
        ]}></FAQ>
      <Footer/>
    </AnimationRevealPage>
  );
};
