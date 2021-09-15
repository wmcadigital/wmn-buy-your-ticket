import { useCallback } from 'react';
import { TUseNavigationLogic } from './useNavigationLogic.types';

const useNavigationLogic: TUseNavigationLogic = (
  currentSection,
  currentStep,
  totalSections,
  totalSectionSteps,
  globalStateDispatch,
) => {
  // Helper booleans
  const isOnLastStep = totalSectionSteps === currentStep;
  const isOnLastSection = currentSection === totalSections;
  const isOnLastSectionAndLastStep = isOnLastSection && isOnLastStep;

  // Skips to a specific section
  const skipToSection = useCallback(
    (newSection: number) => {
      if (newSection > totalSections) {
        throw Error(
          `Cannot go to section ${newSection}, there are only ${totalSections} sections. If you want to go the summary page, "goToSummary" instead.`,
        );
      }

      if (newSection <= currentSection) {
        throw Error('"skipToSection" can only go forwards');
      }

      return globalStateDispatch({ type: 'GO_TO_SECTION', payload: newSection });
    },
    [currentSection, globalStateDispatch, totalSections],
  );

  // Skips to a specific step in the current section
  const skipToStep = useCallback(
    (newStep: number) => {
      if (newStep > totalSectionSteps) {
        throw Error(
          `Cannot go to step ${newStep}, this section only has ${totalSectionSteps} steps. If you want to go the summary page, "goToSummary" instead.`,
        );
      }

      if (newStep <= currentStep) {
        throw Error('"skipToStep" can only go forwards');
      }
      return globalStateDispatch({ type: 'GO_TO_STEP', payload: newStep });
    },
    [currentStep, globalStateDispatch, totalSectionSteps],
  );

  // Goes to the summary page
  const goToSummary = useCallback(() => {
    return globalStateDispatch({ type: 'SHOW_SUMMARY_PAGE' });
  }, [globalStateDispatch]);

  // Goes to the next step (if there is one) or the first step of the next section
  const goToNextStep = useCallback(() => {
    if (isOnLastSectionAndLastStep) return goToSummary();
    if (isOnLastStep) return skipToSection(currentSection + 1);

    const nextStep = currentStep + 1;
    return globalStateDispatch({ type: 'GO_TO_STEP', payload: nextStep });
  }, [
    currentSection,
    currentStep,
    globalStateDispatch,
    goToSummary,
    isOnLastSectionAndLastStep,
    isOnLastStep,
    skipToSection,
  ]);

  return {
    goToNextStep,
    skipToStep,
    skipToSection,
    goToSummary,
  };
};

export default useNavigationLogic;