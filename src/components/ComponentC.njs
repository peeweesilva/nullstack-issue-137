import Nullstack from "nullstack";

export class ComponentC extends Nullstack {
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

  render() {
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
}