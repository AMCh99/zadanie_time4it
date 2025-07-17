import Form from "next/form";

export default function Home() {
  return (
    <div className="form-bg">
      <Form action={'/submit'}>
        <div className="form-container">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
}
