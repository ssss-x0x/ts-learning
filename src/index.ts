// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World')
// world.sayHello(root)

// 03. 基本の型定義
import { primitiveSample, notExistSample, anySample, unKnownSample } from './basic'

// primitiveSample()
// notExistSample()
// anySample()
// unKnownSample()

// 04. 関数の型定義
import {
  logMessage,
  logMessage2,
  logMessage3,
  logMessage4,
  alwaysThrowError,
  logMessage6,
  logMessage7,
} from './function/basic'

// logMessage('Hello TypeScript!')
// logMessage2('Hello TypeScript!')
// logMessage3('Hello TypeScript!')
// logMessage4('Hello TypeScript!')
// alwaysThrowError('Error Message')

// logMessage6('test')
// logMessage7('test')

import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

// isUserSignedIn('ABC', 'sha-sha')
// isUserSignedIn('ABC')
// isUserSignedIn('DEF')

// isUserSignedIn2('ABC', 'sha-sha')
// isUserSignedIn2('ABC')
// isUserSignedIn2('DEF')

// const sum: number = sumProductsPrice(100, 200, 300, 400)
// console.log(`Function parameters sample5: ${sum}`)

// 05. オブジェクトの型定義
import objectSample from './object/object'

// objectSample()

// 06. 型エイリアスでオブジェクトの型定義
import typeAliasSample from './object/alias'

// typeAliasSample()

// 07. 配列・タプルの型定義
import arraySample from './array/array'

// arraySample()

import tupleSample from './array/tuple'

// tupleSample()

// 08. ジェネリック型を使いながらポリモーフィズムを理解する
import genericsBasicSample from './generics/basic'

// genericsBasicSample()

import genericAdvancedSample from './generics/advanced'

// genericAdvancedSample()

// 09. TypeScriptで学ぶオブジェクト指向開発
import Game from './oop/shogi'

const game = new Game()
console.log(game)
