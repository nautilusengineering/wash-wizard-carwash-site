interface WizardHatProps {
  className?: string;
}

export default function WizardHat({ className }: WizardHatProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16 2c-.4 2-1.6 6-3.5 10.5-.7 1.5-1.9 3-4 3.9L19 16.4c-.4-2.4-1-5.4-1.5-8.4-.5-2.5-1-4.2-1.5-6z" />
      <path d="M4 17.2c4.5-1.2 12-1.2 17.5-.2l-1 2.2c-5.5 1.2-12.5 1.2-16 0z" />
    </svg>
  );
}
