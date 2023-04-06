export default function genericsBasicSample() {
  /**
   * ジェネリック型を使わない場合
   */
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Gererics basic sample 1:', stringReduce(['hoge', 'piyo', 'fuga'], 'start'))
  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Gererics basic sample 2:', numberReduce([100, 200, 300], 1000))

  // ジェネリック型を使わずに型定義をする
  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
    // booleanのときは？など都度追加するのが大変になる・・・のでジェネリック型で型定義をするのがよい
  }

  /**
   * ジェネリック型を使う場合
   */
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  // ジェネリック型の T に stringを渡す
  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += `${array[i]} `
    }
    return result
  }
  console.log('Gererics basic sample 3:', genericStringReduce(['MAKE', 'TYPESCRIPT'], ''))

  // ジェネリック型の T に numberを渡す
  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Gererics basic sample 4:', genericNumberReduce([1, 2, 3], 100))

  /**
   * いろいろなジェネリック型の定義方法
   */

  // 完全な呼び出しシグネチャ（個々のシグネチャにジェネリック型を割り当てる）
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }
  // ジェネリック型の T に numberを渡す
  const genericNumberReduce2: GenericReduce2 = (array: number[], initialValue: number) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Gererics basic sample 5:', genericNumberReduce2([1, 2, 3], 100))

  // 呼び出しシグネチャの省略記法
  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  const genericNumberReduce3: GenericReduce3<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Gererics basic sample 6:', genericNumberReduce3([1, 2, 3], 100))
}
