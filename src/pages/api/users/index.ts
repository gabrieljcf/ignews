import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Gabriel" },
    { id: 2, name: "Bruno" },
    { id: 3, name: "Nogueira" },
  ];

  return response.json(users);
};
