type JSONValue = number | string | null | undefined | JSONArray | JSONObject;
type JSONArray = JSONValue[];
type JSONObject = {
  [k in string]: JSONValue;
};

const value: JSONObject = {
  name: "Alfian",
  hobbies: ["Programming", "Eat", "Basketball"],
};

console.log(value);
