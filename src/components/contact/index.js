import ContentSection from "components/content-section";
import {
  Label,
  Input,
  FormField,
  ContactCard,
  Title,
  Subtitle,
  Form,
  TextA,
} from "./styles";

const Contact = ({ title, subtitle }) => {
  const InputField = ({
    id,
    label,
    labelIsPlaceholder,
    type,
    ...delegates
  }) => {
    const componentProps = {
      id,
      ...(labelIsPlaceholder != undefined
        ? { ariaLabel: label, placeholder: label }
        : {}),
      ...delegates,
    };
    return (
      <FormField inputType={type}>
        {labelIsPlaceholder != undefined ? null : (
          <Label for={id}>{label}</Label>
        )}
        {type == "textarea" ? (
          <TextA {...componentProps} />
        ) : (
          <Input {...componentProps} />
        )}
      </FormField>
    );
  };
  return (
    <ContentSection>
      <ContactCard>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <div>
          <Form>
            <InputField
              label="First Name"
              name="firstName"
              type="text"
              id="firstName"
              labelIsPlaceholder
              required
            />
            <InputField
              label="Last Name"
              name="lastName"
              type="text"
              id="lastName"
              labelIsPlaceholder
              required
            />
            <InputField
              label="phone"
              name="phone"
              type="phone"
              id="phone"
              labelIsPlaceholder
              required
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              id="email"
              labelIsPlaceholder
              required
            />
            <InputField
              label="Message"
              name="message"
              type="textarea"
              id="message"
              required
            />
          </Form>
        </div>
      </ContactCard>
    </ContentSection>
  );
};

export default Contact;
