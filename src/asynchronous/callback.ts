export default function callbackSample() {
  const url = 'https://api.github.com/users/ssss-x0x'

  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    fetch(url)
      .then((res) => {
        // レスポンスのbodyをJSONで読み取った結果を返す
        res
          .json()
          .then((json) => {
            console.info('Asyncronous Callback Sample 1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.info('Asyncronous Callback Sample 2:', profile)
}
