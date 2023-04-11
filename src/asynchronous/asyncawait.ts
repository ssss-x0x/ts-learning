export default async function asyncAwaitSample() {
  const url = 'https://api.github.com/users/ssss-x0x'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((err) => {
        console.error(err)
        return null
      })

    if (!response) {
      return null
    }

    const json = await response
      .json()
      .then((json: Profile) => {
        console.info('Asyncronous async/await Sample 1:', json)
        return json
      })
      .catch((err) => {
        console.error(err)
        return null
      })

    if (!json) {
      return null
    }

    return json
  }

  const profile = await fetchProfile()
  if (profile) {
    console.info('Asyncronous async/await Sample 2:', profile)
  }
}
