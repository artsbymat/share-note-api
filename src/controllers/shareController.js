import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
} from "../services/shareService.js";

export async function handleGet(req, res) {
  try {
    if (req.params.id) {
      const note = await getNoteById(req.params.id);
      res.json(note);
    } else {
      const notes = await getAllNotes();
      res.json(notes);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function handlePost(req, res) {
  try {
    const { slug, title, content } = req.body;
    const note = await createNote({ slug, title, content });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function handleDelete(req, res) {
  try {
    await deleteNote(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
