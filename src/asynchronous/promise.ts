export default function promiseSample() {
  const url = 'https://api.github.com/users/ssss-x0x'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          res
            .json()
            .then((json) => {
              console.info('Asyncronous Promise Sample 1:', json)
              resolve(json)
            })
            .catch((err) => {
              console.error(err)
              reject(null)
            })
        })
        .catch((err) => {
          console.error(err)
          reject(null)
        })
    })
  }
  const profile = fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.info('Asyncronous Promise Sample 2:', profile)
      }
    })
    .catch((err) => {
      console.error(err)
    })
}
