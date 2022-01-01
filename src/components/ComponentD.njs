import Nullstack from "nullstack";

export class ComponentD extends Nullstack {
  renderComponentD({ me }) {
    return (
      <p class='text-sm'>
        My name is {me.name}
      </p>
    )
  }
}