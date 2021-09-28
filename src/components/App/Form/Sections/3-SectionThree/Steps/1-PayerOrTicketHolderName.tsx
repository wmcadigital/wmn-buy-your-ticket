import { TStepProps } from 'types/step';
import { useFormDataContext } from 'state/formDataState/context';
import { FullNameStep } from '../../sharedSteps';

const PayerName = ({ stepNavigation }: TStepProps) => {
  const { goToNextStep } = stepNavigation;
  const [formDataState] = useFormDataContext();
  const { applicationForMe } = formDataState;

  const question = applicationForMe.value ? 'What is your name?' : "What is the payer's name?";
  const dataNamePrefix = applicationForMe.value ? 'ticketHolder' : 'payer';

  return (
    <FullNameStep
      handleNavigation={goToNextStep}
      dataNamePrefix={dataNamePrefix}
      question={question}
    />
  );
};

export default PayerName;