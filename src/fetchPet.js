const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiResult = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiResult.ok) {
    throw new Error("An error occurred while fetching the data");
  }
  return apiResult.json();
};

export default fetchPet;
