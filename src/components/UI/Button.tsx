import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode,
  type: any,
  onClick: () => void,
  className?: string
};

const Button = ({ type, onClick, children }: Props) => {
  return (
    <button
      className={styles.button}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;