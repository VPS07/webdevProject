import "./style/FAQ.css";

function FAQ() {
  return (
    <div className="body">
      <h1>FAQ</h1>
      <div className="text1">
        <input type="text" placeholder="What should we call You?" id="standard-password-input" />
      </div>
      <div className="text2">
        <input type="text" placeholder="Email" id="standard-password-input" />
      </div>
      <div className="text3">
        <textarea
          placeholder="   Write your FAQ here"
          id="w3review"
          name="w3review"
          rows="6"
          cols="50"
        ></textarea>
      </div>
      <button className="button_submit">Submit</button>
    </div>
  );
}

export default FAQ;
