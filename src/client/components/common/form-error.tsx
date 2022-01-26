interface IFormErrorProps {
  errorMessage: string;
}

export const FormError: React.FC<IFormErrorProps> = ({ errorMessage }) => (
  <div className=" text-xs text-red-400 p-1">{errorMessage}</div>
);
