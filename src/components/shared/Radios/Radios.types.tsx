import { TRadioProps } from './Radio/Radio.types';

export type TRadiosProps = {
  name: string;
  hint?: string | JSX.Element;
  error: { message: string } | null;
  radios: Array<Pick<TRadioProps, 'text' | 'value' | 'info'> & { html: string | null }>;
  currentValue?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// export type TRadiosProps<T> = {
//   name: string;
//   hint?: string | JSX.Element;
//   error: { message: string } | null;
//   radios: T extends TRadioProps;
//   currentValue: TRadioProps['value'];
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };