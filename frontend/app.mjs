import { h, Fragment, render } from 'https://esm.sh/preact';
import { useState, useEffect } from 'https://esm.sh/preact/hooks';
import test2 from "./test2.mjs";

const { test } = await import("./test.mjs");

console.log(test("hi"));
console.log(test2("hi2"));

console.log(await Promise.resolve("awaited"));

function ListOfStuff() {
  const [stuff, setStuff] = useState([]);

  return h("div", null,
    h("button", { onClick: () => { setStuff([...stuff, Math.random()]) } }, "Click Me!"),
    h("ul", null, stuff.map(thing => h("li", null, thing))),
  )
}

// https://www.skypack.dev/
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

  return h("div", null,
    h("h1", null, h(Fragment, null, "Hello ", props.name, " ", props.title, "!")),
    h(ListOfStuff),
  )
}


const root = document.getElementById("app");
root.innerHTML = ""
const rootElement = h(App, { name: "World", title: "bar" });
render(rootElement, root);
