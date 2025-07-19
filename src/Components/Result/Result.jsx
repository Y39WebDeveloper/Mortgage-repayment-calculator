import "./Result.css";

function Result({ result, total, isEmpty }) {
  return (
    <div className="result">
      {!isEmpty ? (
        <>
          <div className="result-head">
            <h2 className="txt-2 txt-white">Your results</h2>
            <p className="txt-4 txt-300 txt-slate-300">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
          </div>
          <div className="result-body">
            <div className="result-item">
              <span className="txt-4 txt-slate-300">
                Your monthly repayments
              </span>
              <div className="txt-1 txt-lime">£{result}</div>
            </div>
            <div className="result-item">
              <span className="txt-4 txt-slate-300">
                Total you'll repay over the term
              </span>
              <div className="txt-2 txt-white">£{total}</div>
            </div>
          </div>
        </>
      ) : (
        <ResultEmpty />
      )}
    </div>
  );
}

export default Result;

function ResultEmpty() {
  return (
    <div className="result-empty">
      <div className="img">
        <img src="/assets/images/illustration-empty.svg" alt="" />
      </div>
      <h2 className="txt-2 txt-white">Results shown here</h2>
      <h4 className="txt-4 txt-slate-300">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </h4>
    </div>
  );
}
