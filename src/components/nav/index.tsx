import React from "react";

interface NavProps {

}

const getData = async () => {
  const res = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: '{ hello }'
    })
  })

  const data = await res.json();


  return data;
}

export default async function Nav (props: NavProps): Promise<React.ReactNode> {
  const hello = await getData();

  console.log({hello})

  return <h1>{hello.data.hello}</h1>;}