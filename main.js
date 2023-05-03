import { html, render, useState, useEffect } from 'https://unpkg.com/htm@3.1.1/preact/standalone.module.js'
import { test } from "./test.js";
import test2 from "./test2.js";

console.log(test("hi"));
console.log(test2("hi2"));

// https://github.com/preactjs/preact-router
// https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html
// https://github.com/developit/htm
// https://preactjs.com/guide/v10/getting-started/#alternatives-to-jsx
// Create your app
/**
 *
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.foo
 * @returns {VNode}
 */
function App(props) {
  const [oldTitle] = useState(document.title);
  useEffect(() => {
    document.title = props.foo;

    return () => {
      document.title = oldTitle;
    }
  }, [props.foo])
  return html`<h1>Hello ${props.name} ${props.foo}!</h1>`;
}

const root = document.getElementById("app");
root.innerHTML = ""
render(html`<${App} name="World" foo="bar" />`, root);
