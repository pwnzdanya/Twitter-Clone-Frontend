import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import styles from './Input.module.scss'


type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputProps = DefaultInputProps & {
  register?: any
  label: string
}

const Input: React.FC<InputProps> = ({label, name,required, register, ...inputProps}) => {

  return (
    <div className={styles.wrapperInput}>
      <input
      {...register(name, { required }) }
        {...inputProps}
        required
      />
      <label>{label}</label>
    </div>

  );
};

export default Input;