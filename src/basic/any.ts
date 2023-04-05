export default function anySample() {
  let name: any = null
  console.log(`any sample 1:, ${typeof name}, ${name}`)

  name = 'hoge'
  console.log(`any sample 2:, ${typeof name}, ${name}`)

  name = 29
  console.log(`any sample 3:, ${typeof name}, ${name}`)

  name = true
  console.log(`any sample 3:, ${typeof name}, ${name}`)
}
