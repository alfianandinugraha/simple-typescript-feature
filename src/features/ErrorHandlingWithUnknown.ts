class HttpError<T> {
  code: number;
  message: string;
  body?: T;

  constructor(code: number, message: string, body?: T) {
    this.code = code;
    this.message = message;
    this.body = body;
  }
}

function storeUser(name: string) {
  if (name) return "Success to store user !";
  throw new HttpError(401, "Please insert name");
}

try {
  const result = storeUser("");
  console.log(result);
} catch (err: unknown) {
  if (err instanceof HttpError) {
    console.error("HTTP Error");
    console.error(err);
  } else {
    console.log("Something wrong");
  }
}

function fetchDummy(length: number) {
  if (length >= 10) return "Success !";
  throw new Error("This is bad !");
}

try {
  const result = fetchDummy(5);
  console.log(result);
} catch (err: unknown) {
  if (err instanceof Error) {
    console.error(err.message);
  } else {
    console.log(err);
  }
}
