import { Link } from 'react-router-dom';

function Button({ children, to, disabled, type, onClick }) {
  const base =
    ' inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:outline-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-4 disabled:cursor-not-allowed text-sm ';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-2 text-xs md:px-5 md:py-2.5',
    rounded: base + 'rounded-full h-6 w-6 text-xs md:h-8 md:w-8',
    secondary:
      'text-sm inline-block rounded-full border-2 text-sone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:outline-stone-200 focus:ring focus:ring-stone-200 focus:ring-offset-4 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
