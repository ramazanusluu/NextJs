import { trainig } from "../../../Training";

export default function handler(req, res) {
  res.status(200).json(trainig);
}
