// interfaceで表現する場合
interface Bread {
  calories: number
}

interface Bread {
  type: string
}

// 宣言のマージがされるので、 calories, typeの両方の宣言が必要
const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

// 型エイリアスで表現する場合
type MaboDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice // 交差型(union)

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}

/**
 * インターフェースの継承
 */
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'season'
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}

/**
 * 型エイリアスをインターフェースに継承させることもできる
 */
type Booktype = {
  page: number
  title: string
}

interface Handbook extends Booktype {
  theme: string
}

const cotrip: Handbook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
}

/**
 * implementsを使ってclassに型を定義する
 */
export default class Comic implements Book {
  page: number
  title: string

  constructor(pg: number, ttl: string, private publishYear: string) {
    this.page = pg
    this.title = ttl
  }

  getPublishYear() {
    return `${this.title}が発売されたのは${this.publishYear}年です`
  }

  getPage() {
    return `${this.title}は${this.page}ページで構成されています`
  }
}
