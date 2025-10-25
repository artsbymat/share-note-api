import { supabase } from "../db/client.js";

export async function getAllNotes() {
  const { data, error } = await supabase
    .from("shared_notes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getNoteById(id) {
  const { data, error } = await supabase
    .from("shared_notes")
    .select("*")
    .eq("id", id)
    .is("deleted_at", null)
    .single();

  if (error) throw error;
  return data;
}

export async function createNote({ slug, title, content }) {
  const { data, error } = await supabase
    .from("shared_notes")
    .insert([{ slug, title, content }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteNote(id) {
  const { error } = await supabase
    .from("shared_notes")
    .update({ deleted_at: new Date().toISOString() })
    .eq("id", id)
    .is("deleted_at", null);

  if (error) throw error;
  return error;
}
