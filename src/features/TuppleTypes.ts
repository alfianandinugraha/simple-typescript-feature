type UserArgs = [name: string, age: number];

function printUser(...user: UserArgs) {
  console.log(user);
}

printUser("Alfian", 16);
