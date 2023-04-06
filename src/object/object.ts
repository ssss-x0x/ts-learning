export default function objectSample(): void {
  const a: object = {
    name: 'shasha',
    age: 29,
  }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'name',
  }
  console.log('Object object sample1', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object object sample2', country)

  /**
   * オプショナルとreadonlyを使う例
   */
  const shasha: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 29,
    lastName: 'Dokokano',
    firstName: 'sha-sha',
  }
  shasha.gender = 'female'
  shasha.lastName = 'Kamado'
  // readonlyなので再代入できない
  // shasha.firstName = 'Tanjiro'

  console.log('Object object sample3', shasha)

  /**
   * インデックスシグネチャを使う例
   */
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample4', capitals)
}
