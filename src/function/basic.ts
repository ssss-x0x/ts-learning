// アロー関数
export const logMessage = (message: string): void => {
  console.log(`Function basic sample1: ${message}`)
}

// 名前付き関数
export function logMessage2(message: string): void {
  console.log(`Function basic sample2: ${message}`)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log(`Function basic sample3: ${message}`)
}

// アロー関数の省略記法
export const logMessage4 = (message: string): void => console.log(`Function basic sample4: ${message}`)

// 戻り値がneverの場合の関数サンプル
export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャ（省略記法）
type LogMessage = (message: string) => void
export const logMessage6: LogMessage = (message) => {
  console.log(`Function basic sample6: ${message}`)
}

// 呼び出しシグネチャ（完全記法）
type FullLogMessage = {
  (message?: string): void
}
export const logMessage7: FullLogMessage = (message = 'No message') => {
  // デフォルトパラメータはシグネチャ側ではなく関数の定義時に設定する
  console.log(`Function basic sample7: ${message}`)
}
