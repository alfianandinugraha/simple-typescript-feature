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

class ParamError {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  static validate(err: any) {
    return err instanceof ParamError;
  }
}

function storeUser(name: string) {
  if (!name) throw new ParamError("Please input name");
  if (name.length >= 5) throw new HttpError(401, "Name is longer");
  return "Success to store user !";
}

try {
  const result = storeUser("");
  console.log(result);
} catch (err: unknown) {
  if (err instanceof HttpError) {
    console.error("HTTP Error");
    console.error(err);
  } else if (ParamError.validate(err)) {
    console.error("Param error");
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
