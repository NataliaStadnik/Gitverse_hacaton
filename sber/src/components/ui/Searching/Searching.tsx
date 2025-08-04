import s from "./styles.module.scss";

interface InputProps {
  handleChange: (value: string) => void;
  value: string;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onInputClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  className?: string;
  btnClassName?: string;
  style?: string;
}

export default function Searching(props: InputProps) {
  const {
    btnClassName,
    onFocus,
    handleChange,
    value,
    handleBlur,
    onKeyDown,
    onInputClick,
    onButtonClick,
    className,
  } = props;

  return (
    <div className={s.container}>
      <input
        type="text"
        className={`${s.input} ${className}`}
        onFocus={onFocus}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={onKeyDown}
        onClick={onInputClick}
        value={value}
        placeholder="Поиск"
      />
      <button
        className={`${s.searchBtn} ${btnClassName}`}
        onClick={onButtonClick}
      ></button>
    </div>
  );
}
