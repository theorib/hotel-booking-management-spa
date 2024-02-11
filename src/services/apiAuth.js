import supabase, { supabaseUrl } from './supabase';

export async function signUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  });

  if (error) {
    throw new Error(error?.message);
  }

  return { data };
}

export async function login({ email, password }) {
  // console.log('running login');

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error?.message);
  }

  return { data };
}

export async function getCurrentUser() {
  // console.log('running getCurrentUser');

  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error?.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error?.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // console.log('running updateCurrentUser');

  // Update password or full name
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error?.message);

  if (!avatar) return data;
  // upload avatar image
  const newImageName = `avatar-${crypto.randomUUID()}-${data.user.id}-${
    avatar.name
  }`.replace('/', '-');

  const { error: storageError } = supabase.storage
    .from('avatars')
    .upload(newImageName, avatar);

  if (storageError) throw new Error(storageError?.message);
  // update avatar in the user

  const imagePath = `${supabaseUrl}/storage/v1/object/public/avatars/${newImageName}`;

  const { data: updatedUser, error: updatedUserError } =
    await supabase.auth.updateUser({
      data: {
        avatar: imagePath,
      },
    });
  if (updatedUserError) throw new Error(updatedUserError?.message);

  return updatedUser;
}
