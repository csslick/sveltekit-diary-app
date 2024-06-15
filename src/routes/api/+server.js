import { json } from '@sveltejs/kit'
import { supabase } from '$lib/supabaseClient'

export async function POST({ request }) {
  const data = await request.json()
  const { content } = data;
  const { error } = await supabase
    .from('diaries')
    .insert({ content })  

  // 에러 처리: 클라이언트에 전달
  if (error) {
    return json( { success: false })
  }
  return json({ success: true })
}