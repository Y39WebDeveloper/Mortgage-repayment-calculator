import './RadioInput.css'

function RadioInput({value, name, label, setValue, checked}) {
  return (
    <label className='radio'>
        <div className="radio-input">
            <input type="radio" name={name} value={value} onChange={setValue} checked={checked==value} />
            <span className="checkmark"></span>
        </div>
        <span className='txt-3 txt-slate-900'>{label}</span>
    </label>
  )
}

export default RadioInput