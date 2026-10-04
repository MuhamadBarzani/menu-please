type FieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date";
export default function Field({ type = "text" }: { type?: FieldType }) {
  return (
    <input
      className={"bg-amber-700 rounded-md px-2 w-full"}
      type={type}
    ></input>
  );
}
