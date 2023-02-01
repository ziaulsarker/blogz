import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(nextReq: NextApiRequest, nextRes: NextApiResponse): void {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: '{ hello }'
    })
  };

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:4000/graphql/', options)
      const data = await res.json();
      nextRes.json(data);
    } catch (err) {
       
        nextRes
        .status(500)
        .json(JSON.stringify({error: {message: "cannot connect to server"}}))
;

    //   if(err.cause.code === "ECONNREFUSED") {
    //        return (
    //         nextRes
    //         .status(500)
    //         .json(JSON.stringify({error: {message: "cannot connect to server"}}))
    //        );
    //   }


    //  return nextRes
    //   .status(500)
    //   .json(JSON.stringify(err));
    }
  };
  getData();
}
