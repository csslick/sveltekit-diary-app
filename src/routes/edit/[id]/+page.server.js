import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  const { data } = await supabase
    .from("diaries")
    .select()
    .eq("id", params.id);

  console.log(params)
  return {
    diary: data
  }
}