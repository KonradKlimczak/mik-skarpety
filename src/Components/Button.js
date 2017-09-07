const defaultOptions = {
  tag: 'button',
  className: 'mik-button'
};

export function render(text, options={}) {
  options = Object.assign({}, defaultOptions, options);
  const button = document.createElement(options.tag);
  button.className = options.className;
  button.innerText = text;

  return button;
}