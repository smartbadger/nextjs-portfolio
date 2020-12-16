import ContentSection from "components/content-section";

const Contact = ({ title }) => {
  const InputField = ({ id, label, ...delegates }) => {
    return (
      <>
        <label for={id}>{label}</label>
        <input id={id} {...delegates} />
      </>
    );
  };
  return (
    <ContentSection>
      <p>{title}</p>
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
            <InputField label="Email" name="email" type="email" id="email" required />
            <InputField
            label="Message"
            name="message"
            type="text_field"
            id="message"
            required
            />
        </form>
      </div>
    </ContentSection>
  );
};

export default Contact;
