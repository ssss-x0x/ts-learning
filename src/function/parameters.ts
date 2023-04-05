// オプションパラメータを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log(`Function parameters sample1: User is signed in! Username is ${username}`)
    return true
  } else {
    console.log(`Function parameters sample2: User is NOT signed in!`)
    return false
  }
}

// デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log(`Function parameters sample3: User is signed in! Username is ${username}`)
    return true
  } else {
    console.log(`Function parameters sample4: User is NOT signed in!`)
    return false
  }
}

// レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, price) => {
    return prevTotal + price
  }, 0)
}
