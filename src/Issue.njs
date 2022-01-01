import Nullstack from 'nullstack';
import { ComponentC } from './components/ComponentC.njs';
import { ComponentD } from './components/ComponentD.njs';

export class Issue extends Nullstack {

  prepare (context) {
    // just for testing purpose, to clear between examples
    context.me = undefined;
  }

  render({ me }) {
    return (
      <section class='w-64 mx-auto my-10 flex flex-col justify-center items-center'>
        <h2 class='pb-4 text-center'>not working example with outer components </h2>
        <p class='text-sm text-slate-300 mb-4'>{ me ? 'Welcome Back' : 'Please, identify yourself' }</p>
        { me ? <ComponentD/> : <ComponentC />}
      </section>
    )
  }

}