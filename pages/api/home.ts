import { NextApiRequest,NextApiResponse } from "next";
const home = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
}