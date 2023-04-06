export default function arraySample() {
  /**
   * シンプルな配列の型定義
   */
  const colors: string[] = ['red', 'blue']
  colors.push('yellow') // OK
  // colors.push(123) // NG

  console.log('Array array sample1', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  console.log('Array array sample2', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  console.log('Array array sample3', ids)

  /**
   * 配列の型推論
   */
  const generateSomeArray = () => {
    const _someArray = [] //any[]型の配列
    _someArray.push(123) // number[]として型推論
    _someArray.push('ABC') // (string|number)[] として型推論
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push('DEF')
  someArray.push(456)
  // someArray.push(true) // booleanなので追加NGとなる

  console.log('Array array sample4', someArray)

  /**
   * イミュータブルな配列を作る
   */
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  //  commands.push("git status") // readonlyのため、push不可
  // commands[2] = "git status" // readonlyのため、書き換え不可
  console.log('Array array sample5', commands)
}
