type StringOrNum = string | number;
type UserType = { name: string; uid: string | number };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: UserType) => {
  console.log(`${user} says hello`);
};
