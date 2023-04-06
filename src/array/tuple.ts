export default function tupleSample() {
  /**
   * シンプルなタプルの型定義
   */

  let response: [number, string] = [200, 'OK']
  response = [400, 'Bad Request'] // OK
  //  response = [400, "Bad Request", "Email sarameter is missing"] // 配列の数でNGとなる
  //  response = ["400", "Bad Request"] // 0番目の方がnumberでないためNGとなる

  console.log('Array tuple sample1', response)

  /**
   * 可変長引数を使ったタプル
   */
  const girlFriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlFriends.push('Misa')
  //  girlFriends.push(1) // string型でないためNG
  console.log('Array tuple sample2', girlFriends)

  const girlFriends2: [string, ...(string | number)[]] = ['Kana', 'Miku', 'Keiko']
  girlFriends2.push('Misa')
  girlFriends2.push(girlFriends2.length)
  console.log('Array tuple sample3', girlFriends2)
}
