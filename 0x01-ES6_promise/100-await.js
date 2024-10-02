import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoResult = await uploadPhoto();
  const userResult = await createUser();

  return {
    photo: photoResult?.status === 200 ? photoResult : null,
    user: userResult?.firstName ? userResult : null,
  };
}
