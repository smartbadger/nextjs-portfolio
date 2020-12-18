import ContentSection from "components/content-section";
import { Label, Input, FormField } from "./styles";
import { Card } from "atoms/ui/elements";
const Contact = ({ title, subtitle }) => {
  const InputField = ({ id, label, ...delegates }) => {
    return (
      <FormField>
        <Label for={id}>{label}</Label>
        <Input id={id} {...delegates} />
      </FormField>
    );
  };
  return (
    <ContentSection>
      <Card>
        <p>{title}</p>
        <p>{subtitle}</p>
        <div>
          <form>
            <InputField
              label="First Name"
              name="firstName"
              type="text"
              id="firstName"
              required
            />
            <InputField
              label="Last Name"
              name="lastName"
              type="text"
              id="lastName"
              required
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              id="email"
              required
            />
            <InputField
              label="Message"
              name="message"
              type="text_field"
              id="message"
              required
            />
          </form>
        </div>
      </Card>
    </ContentSection>
  );
};

export default Contact;
