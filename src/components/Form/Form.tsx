import { useState } from "react";
import "./Form.scss";

export const Form = (props: { createNewTodo: Function }) => {
  const [text, setText] = useState<string>("");

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (text) {
      props.createNewTodo(text);
      setText("");
    }
  };

  return (
    <div className="formWrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
