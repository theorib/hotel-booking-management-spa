import supabase, { supabaseUrl } from './supabase';

export const getCabins = async function () {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Error fetching cabins');
  }
  return data;
};

export const deleteCabin = async function (id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted');
  }
  return data;
};

export const createUpdateCabin = async function (cabin, id) {
  const hasImagePath = cabin?.image?.startsWith?.(supabaseUrl);
  const isUpdate = Boolean(id);

  const image = hasImagePath ? cabin.image : cabin.image[0];
  // const { image } = cabin;

  const newImageName = hasImagePath
    ? ''
    : `${Math.trunc(Math.random() * 100000000)}-${image.name}`.replace('/', '');

  const imagePath = hasImagePath
    ? image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${newImageName}`;

  let query = supabase.from('cabins');

  const newCabin = { ...cabin, image: imagePath };

  // Create Cabin
  if (!isUpdate) {
    query = query.insert([newCabin]);
  }
  // Edit Cabin
  if (isUpdate) {
    query = query.update(newCabin).eq('id', id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error(
      !isUpdate ? 'Cabin could not be created' : 'Cabin could not be edited'
    );
  }
  // 01. Create the cabin in the database

  // 02. upload image
  // const cabinImage = event.target.files[0];

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from('cabin-images')
      .upload(newImageName, image);

    if (storageError) {
      if (!isUpdate) deleteCabin(data.id);

      console.error(storageError);
      throw new Error(
        !isUpdate
          ? 'Cabin file could not be uploaded and the cabin was not created'
          : 'Cabin file could not be uploaded when editting cabin'
      );
    }
  }

  return data;
};
