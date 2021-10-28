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
