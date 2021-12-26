interface IFormErrorProps {
  errorMessage: string;
}

export const FormError: React.FC<IFormErrorProps> = ({ errorMessage }) => (
  <div className=" text-xs text-blue-800 p-1">{errorMessage}</div>
);
