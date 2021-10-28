import "./features/OptionalChaining";
import "./features/NullishCoalescing";
import "./features/TuppleTypes";
import "./features/RecuriveTypeAliases";
import "./features/ErrorHandlingWithUnknown";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
