import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import EmailIllustrationSrc from "images/contactlogo2.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

const ContactUs = ({
  subheading = "Contact Us",
  heading = <>Feel free to <HighlightedText>get in touch</HighlightedText><wbr /> with us.</>,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here

    // Display success notification using react-toastify
    toast.success("Form submitted successfully!");

    // Log form data to console
    console.log("Form data submitted:", formData);

    // Clear the form
    setFormData({
    email: "",
    name: "",
    subject: "",
    message: "",
    });

    // Call the external onSubmit function if provided
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={handleSubmit} action={formAction} method={formMethod}>
              <Input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Your Message Here"
                value={formData.message}
                onChange={handleChange}
              />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default () => {
  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <AnimationRevealPage>
      <Header />
      <ToastContainer />
      <ContactUs onSubmit={handleFormSubmit} />
      <ContactDetails
        cards={[
          {
            title: "Morocco",
            description: (
              <>
                <Address>
                  {/* <AddressLine>Morocco </AddressLine> */}
                  <AddressLine>Casablanca, 13760</AddressLine>
                </Address>
                <Email>contact@analygram.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Nigeria",
            description: (
              <>
                <Address>
                  {/* <AddressLine>40 Gates Court</AddressLine> */}
                  <AddressLine>Lagos, 13760</AddressLine>
                </Address>
                <Email>contact@analygram.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          }
        ]}
      />
      <Footer />
      
    </AnimationRevealPage>
  );
};
