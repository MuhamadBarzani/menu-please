import { supabase } from "../utils/supabase";

export async function signUp(
  email: string,
  password: string,
  isLogin: boolean,
) {
  const { data, error } = isLogin
    ? await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
    : await supabase.auth.signUp({
        email: email,
        password: password,
      });
  return { data, error };
}
