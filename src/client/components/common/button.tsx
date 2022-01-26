interface IButtonProps {
  canClick: boolean;
  loading: boolean;
  actionText: string;
}

export const Button: React.FC<IButtonProps> = ({
  canClick,
  loading,
  actionText,
}) => (
  <button
    className={`${
      !canClick
        ? 'bg-amber-50 font-mono shadow-md text-neutral-900 w-full h-10 rounded-md pointer-events-none focus:outline-none'
        : ' bg-slate-700 font-mono  shadow-md text-neutral-50 w-full h-10 rounded-md '
    }`}
  >
    {loading ? 'Loading...' : actionText}
  </button>
);
