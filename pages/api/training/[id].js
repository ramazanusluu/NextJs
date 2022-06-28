import { training } from "../../../Training";

export default function handler(req, res) {
  const { id } = req.query;
  const lesson = training.find((lesson) => lesson.id.toString() === id);
  if (lesson) {
    res.status(200).json(lesson);
  } else {
    res.status(404).json({
      massage: "Error no such lesson",
    });
  }
}
