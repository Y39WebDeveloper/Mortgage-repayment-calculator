import "./InputField.css";

function InputField({
  inputTitle = "price",
  inputSpan = "$",
  spanPosRight = false,
  fullWidth = false,
  value,
  setValue,
  firstSubmit
}) {
  return (
    <label className={fullWidth ? "input-field full-width": "input-field"}>
      <span className="txt-4 txt-slate-700">{inputTitle}</span>
      <div className={(value == "" && !firstSubmit)?"input required":"input"}>
        <span
          className="txt-3 txt-slate-700"
          style={{ order: spanPosRight ? 2 : "" }}
        >
          {inputSpan}
        </span>
        <input type="number" className="txt-3 txt-slate-900" value={value===null?"":value} onChange={setValue} />
      </div>
      {(value == "" && !firstSubmit) && <RequiredTxt />}
    </label>
  );
}

export default InputField;

function RequiredTxt(){
  return(
    <span className="txt-5 txt-red">This field is required</span>
  )
}
