function Button({ tip, onClickOnButton, text }) {
  return (
    <button
      style={{
        color: tip === "error" ? "red" : "unset",
        backgroundColor: tip === "error" ? "black" : "unset",
        maxWidth: "80%",

        textWrap: "nowrap",
      }}
      onClick={() => {
        onClickOnButton(text);
      }}
    >
      {text}
    </button>
  );
}

export default Button;
