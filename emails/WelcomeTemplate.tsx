import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type userDetails = {
  firstName: string,
  lastName: string
}

export default function WelcomeEmail(userDetails: userDetails) {
  
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={paragraph}>Dear {userDetails?.firstName.charAt(0).toUpperCase()}{userDetails?.firstName.slice(1)} {userDetails?.lastName.charAt(0).toUpperCase()}{userDetails?.lastName.slice(1)},</Text>
          <Text style={paragraph}>Welcome to Here to Help. Your premier destination for finding service providers. </Text>
          <Text style={paragraph}>You have successfully registered to our platform.</Text>
        </Container>
      </Section>
    </Html>
  );
}
// Styles for the email template
const main = {
    backgroundColor: "#ffffff",
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
  };
  
  const heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
  };
  
  const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
  };