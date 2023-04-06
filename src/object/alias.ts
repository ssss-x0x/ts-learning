export default function typeAliasSample(): void {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample1', japan)

  const america: Country = {
    capital: 'Washington, D.C',
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object alias sample2', america)

  /**
   *  合併型（union）と交差型（intersection）
   */

  // 剣士
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  // 魔法使い
  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型 = 冒険者は剣士か魔法使いを選べる
  type Adventurer = Knight | Wizard

  // 交差型 = パラディンは剣士かつ魔法使いの型を持つ
  type Paladin = Knight & Wizard

  // 剣士寄りの冒険者
  const adventurer1: Adventurer = {
    hp: 100,
    mp: 0,
    sp: 30,
    weapon: 'ひのきのぼう',
    swordSkill: '火炎斬り',
  }

  // 魔法使い寄りの冒険者
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 100,
    weapon: 'かしの杖',
    magicSkill: 'メラ',
  }
  console.log('Object alias sample3', adventurer1)
  console.log('Object alias sample4', adventurer2)

  const paladin1: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: 'パルチザン',
    swordSkill: 'さみだれ突き',
    magicSkill: 'メガンテ',
  }
  console.log('Object alias sample5', paladin1)
}
