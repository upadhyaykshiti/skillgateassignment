// React-like Core
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.flat(),
    },
  };
}

function renderElement(element, indent = 0) {
  if (typeof element === "string" || typeof element === "number") {
    return ' '.repeat(indent) + element;
  }

  if (typeof element.type === "function") {
    const childElement = element.type(element.props || {});
    return renderElement(childElement, indent);
  }

  const { type, props } = element;
  const children = props?.children || [];
  const isFragment = type === React.Fragment;

  let output = '';

  if (!isFragment) {
    output += ' '.repeat(indent) + `<${type}>` + '\n';
  }

  const renderedChildren = (Array.isArray(children) ? children : [children])
    .map(child => renderElement(child, indent + 2))
    .join('\n');

  output += renderedChildren;

  if (!isFragment) {
    output += '\n' + ' '.repeat(indent) + `</${type}>`;
  }

  return output;
}

function render(element) {
  const output = renderElement(element);
  console.log(output);
}

const React = {
  createElement,
  Fragment: Symbol("Fragment"),
};

// Components

function Header() {
  return React.createElement("header", null,
    React.createElement("h1", null, "SkillGate Renderer"),
    React.createElement("nav", null,
      React.createElement("ul", null,
        ["Home", "About", "Contact"].map(item =>
          React.createElement("li", null, item)
        )
      )
    )
  );
}

function Features() {
  return React.createElement("section", null,
    React.createElement("h2", null, "Features"),
    React.createElement("ul", null,
      ["Custom createElement", "Support for components", "Fragments & nested arrays"].map(f =>
        React.createElement("li", null, f)
      )
    )
  );
}

function Form() {
  return React.createElement("form", null,
    React.createElement("label", null,
      "Name:",
      React.createElement("input")
    ),
    React.createElement("button", null, "Submit")
  );
}

function Table() {
  return React.createElement("table", null,
    React.createElement("thead", null,
      React.createElement("tr", null,
        React.createElement("th", null, "ID"),
        React.createElement("th", null, "Name")
      )
    ),
    React.createElement("tbody", null,
      [1, 2].map(id =>
        React.createElement("tr", null,
          React.createElement("td", null, id.toString()),
          React.createElement("td", null, id === 1 ? "Alice" : "Bob")
        )
      )
    )
  );
}

function App() {
  return React.createElement("div", null,
    React.createElement(Header),
    React.createElement("main", null,
      React.createElement("section", null,
        React.createElement("h2", null, "Introduction"),
        React.createElement("p", null, "This is a custom React-like renderer that prints to the console.")
      ),
      React.createElement(Features),
      React.createElement(Form),
      React.createElement(Table)
    ),
    React.createElement("footer", null,
      React.createElement("small", null, "© 2025 SkillGate Inc.")
    )
  );
}

const app = React.createElement(App);
render(app);
