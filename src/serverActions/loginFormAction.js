'use server'

export default async function handleLogin(data) {
  const res = data.get('email');
  console.log(data)

  return data
}