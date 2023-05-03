import { h, html, render, useState, useEffect } from 'https://unpkg.com/htm@3.1.1/preact/standalone.module.js'
import test2 from "./test2.mjs";

const {test} = await import("./test.mjs");

console.log(test("hi"));
console.log(test2("hi2"));

console.log(await Promise.resolve("awaited"));

// https://github.com/preactjs/preact-router
// https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html
// https://github.com/developit/htm
// https://preactjs.com/guide/v10/getting-started/#alternatives-to-jsx
// Create your app
/**
 *
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.title
 * @returns {VNode}
 */
function App(props) {
  const [oldTitle] = useState(document.title);
  useEffect(() => {
    document.title = props.title;

    return () => {
      document.title = oldTitle;
    }
  }, [props.title])
  return html`<h1>Hello ${props.name} ${props.title}!</h1>`;
}

const root = document.getElementById("app");
root.innerHTML = ""
// html`<${App} name="World" title="bar" />`
const rootElement = h(App, { name: "World", title: "bar" });
render(rootElement, root);
