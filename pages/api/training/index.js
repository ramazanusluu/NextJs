import { training } from "../../../Training";

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "React.js",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, cum.",
    },
    {
      id: 2,
      name: "Next.js",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est eos ipsa dolores delectus perspiciatis?",
    },
    {
      id: 3,
      name: "React Native",
      content:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime deleniti dolores eveniet totam consequatur neque voluptate ut quae.",
    },
    {
      id: 4,
      name: "Angular",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est eos ipsa dolores delectus perspiciatis?",
    }
  ]
  )
}
