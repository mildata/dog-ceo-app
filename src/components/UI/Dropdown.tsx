import { Option } from '../../models/types';
import styles from './Dropdown.module.scss';

type Props = {
  value: any,
  onChange: React.ChangeEventHandler<HTMLSelectElement>,
  options: Option[]
};

const Dropdown = ({ value, options, onChange }: Props) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option, i) => (
        <option value={option.value} key={`${option.value}-${i}`}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;