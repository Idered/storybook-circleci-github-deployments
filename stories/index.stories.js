import { document, console } from "global";
import { storiesOf } from "@storybook/html";

storiesOf("Demo", module)
  .add("heading", () => "<h1>Hello World</h1>")
  .add("textarea", () => "<textarea>Type your message...</textarea>")
  .add(
    "textarea:placeholder",
    () => '<textarea placeholder="Type your message...""></textarea>'
  )
  .add("button", () => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = "Hello Button";
    button.addEventListener("click", e => console.log(e));
    return button;
  });
