import Field from "../components/ui/Field";

function AddItem() {
  return (
    <div className="flex  min-h-screen justify-center items-center">
      <div>
        <form
          className="flex flex-col w-full max-w-xs gap-4"
          onSubmit={() => {}}
        >
          <Field type="file" />
          <p>Name</p>
          <Field type="text" />
          <p>Price</p>
          <Field type="number" />
          <Field type="submit" />
        </form>
      </div>
    </div>
  );
}

export default AddItem;
