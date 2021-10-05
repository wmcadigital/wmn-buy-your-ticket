import { useFormDataContext } from 'state/formDataState/context';
import Section from 'components/shared/Section/Section';
// Steps
import PayerOrTicketHolderName from './Steps/1-PayerOrTicketHolderName';
import PayerOrTicketHolderBirthDate from './Steps/2-PayerOrTicketHolderBirthDate';
import PayerOrTicketHolderContactDetails from './Steps/3-PayerOrTicketHolderContactDetails';
import PayerOrTicketHolderAddress from './Steps/4-PayerOrTicketHolderAddress';
import PayerOrTicketHolderPhoto from './Steps/5-PayerOrTicketHolderPhoto';

const SectionThree = ({ totalSections }: { totalSections: number }) => {
  const [formDataState] = useFormDataContext();
  const { applicationForMe } = formDataState;

  const title = applicationForMe ? 'About you' : 'About the payer';

  return (
    <Section
      totalSections={totalSections}
      title={title}
      steps={[
        PayerOrTicketHolderName,
        PayerOrTicketHolderBirthDate,
        PayerOrTicketHolderContactDetails,
        PayerOrTicketHolderAddress,
        PayerOrTicketHolderPhoto,
      ]}
    />
  );
};

export default SectionThree;