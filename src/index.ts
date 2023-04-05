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

logMessage6('test')
logMessage7('test')

import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

isUserSignedIn('ABC', 'sha-sha')
isUserSignedIn('ABC')
isUserSignedIn('DEF')

isUserSignedIn2('ABC', 'sha-sha')
isUserSignedIn2('ABC')
isUserSignedIn2('DEF')

const sum: number = sumProductsPrice(100, 200, 300, 400)
console.log(`Function parameters sample5: ${sum}`)
