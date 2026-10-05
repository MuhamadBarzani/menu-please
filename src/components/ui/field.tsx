type FieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "file"
  | "submit"
  | "date";
export default function Field({
  type = "text",
  name,
}: {
  type?: FieldType;
  name?: string;
}) {
  return (
    <input
      className={"bg-third rounded-md px-2 w-full h-7"}
      type={type}
      name={name}
      accept={type == "file" ? "image/*" : undefined}
    ></input>
  );
}
