type User = {
  name: string;
  address?: {
    city: string;
    code: string;
  };
};

const user: User = {
  name: "Alfian",
};

const user2: User = {
  name: "Alfian",
  address: {
    city: "Serang",
    code: "12345",
  },
};

console.log(user.name); // "Alfian"
console.log(user.address?.city); // undefined
console.log(user2.address?.city); // "Serang"
