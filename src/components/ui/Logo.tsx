
interface LogoProps {
  variant?: 'small' | 'md';
}

const logoSizes = {
  small: "max-w-[130px]",
  md: "max-w-[155px]"
}

export const Logo = ({ variant = 'md' }: LogoProps) => {
  return <img className={logoSizes[variant]} src="/images/logo.png" alt="Logo" />;
};
