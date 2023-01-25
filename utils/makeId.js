//generate random sequence of letter and numbers of size length
export const makeId = (length) => {
  let result = '';
  const characters = 'abcdefghijlmnopqrstuvwxys0123456';
  const charLength = characters.length;
  for (let index = 0; index < length; index += 1) {
    result += characters.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
};
