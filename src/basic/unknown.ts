export default function unKnownSample() {
  const maybeNumber: unknown = 10
  console.log(`unknown sample 1:, ${typeof maybeNumber}, ${maybeNumber}`)

  const isFoo = maybeNumber === 'foo'
  console.log(`unknown sample 2:, ${typeof isFoo}, ${isFoo}`)

  // 【注】maybeNumber は unknown型なので直接number型としては扱えずエラーとなる
  // const sum = maybeNumber + 10

  // 【注】ので、number型であることを判定してから、number型として操作することが可能となる
  if (typeof maybeNumber === 'number') {
    console.log(`unknown sample 3:, ${typeof isFoo}, ${maybeNumber + 10}`)
  }
}
