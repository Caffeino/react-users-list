import style from './InputText.module.css';

const InputText = ({ label, error, className, ...props }) => (
	<label className={className}>
		<span className={style.label}>{label}</span>
		<input
			{...props}
			type='text'
			className={`${style.input} ${error ? style.borderError : ''}`}
		/>
		{error && <span className={style.error}>{error}</span>}
	</label>
);

export default InputText;
