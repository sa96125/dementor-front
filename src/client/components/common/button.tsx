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
        ? 'bg-amber-50 shadow-lg text-neutral-900 w-full h-10 rounded-sm pointer-events-none focus:outline-none'
        : 'bg-amber-400 shadow-lg text-neutral-900 w-full h-10 rounded-sm '
    }`}
  >
    {loading ? 'Loading...' : actionText}
  </button>
);
