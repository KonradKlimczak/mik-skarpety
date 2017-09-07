import * as Button from '../Components/Button';

const content = document.querySelector('#content');

export function render() {
  const main = document.createDocumentFragment();
  const bigPicture = document.createElement('div');
  bigPicture.className = 'mik-socks';
  const welcomeText = document.createElement('div');
  welcomeText.class = 'mik-welcome';

  const title = document.createElement('h1');
  title.innerText = 'Wygoda!';

  main.appendChild(
    (() => {
      bigPicture.appendChild(
        (() => {
          welcomeText
            .appendChild(
              title
            );
          welcomeText
            .appendChild(
              Button.render('Zobacz więcej')
            );

          return welcomeText;
        })()
      );

      return bigPicture;
    })()
  );

  content.innerHTML = '';
  content.appendChild(main);
};
