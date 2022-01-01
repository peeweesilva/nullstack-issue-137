import Nullstack from 'nullstack';

export class Works extends Nullstack {

  prepare (context) {
    // just for testing purpose, to clear between examples
    context.me = undefined;
  }

  static async getPromiseData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Peewee'
        })
      }, 1000)
    })
  }

  async loadData(context) {
    const response = await this.getPromiseData()
    context.me = response
  }

  renderComponentA() {
    return (
      <div>
        <button
          class='rounded bg-slate-500 text-white py-2 px-4'
          onclick={this.loadData}
        >
          Load Data
        </button>
      </div>
    )
  }

  renderComponentB({ me }) {
    return (
      <p class='text-sm'>
        My name is {me.name}
      </p>
    )
  }

  render({ me }) {
    return (
      <section class='w-64 mx-auto my-10 flex flex-col justify-center items-center'>
        <h2 class='pb-4 text-center'>working example with inner components </h2>
        <p class='text-sm text-slate-300 mb-4'>{ me ? 'Welcome Back' : 'Please, identify yourself' }</p>
        { me ? <ComponentB/> : <ComponentA />}
      </section>
    )
  }

}