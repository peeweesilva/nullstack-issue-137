import Nullstack from 'nullstack';
import './Application.scss';
import { Works } from './Works';
import { Issue } from './Issue';

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
    )
  }

  render() {
    return (
      <main>
        <Head />
        <h1 class='w-full flex justify-center text-xl'> Example</h1>
        <nav class='w-full flex justify-center item-center my-10'>
          <a
            class='rounded bg-green-500 text-white py-2 px-4'
            href='/works'
          >
            Work
          </a>
          <a
            class='rounded bg-red-500 text-white py-2 px-4'
            href='/issue'
          >
          Not work
          </a>
        </nav>

        <Works route="/works" />
        <Issue route="/issue" />
      </main>
    )
  }

}

export default Application;