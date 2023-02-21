import { redirect, Form } from "react-router-dom";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  console.log("about to redirect to /thankyou");
  return redirect("/thankyou");
};

export function App() {
  return (
    <Form method="post">
      <label htmlFor="firstName">Name:</label>
      <input type="text" name="firstName" id="firstName" />
      <button type="submit">Save</button>
    </Form>
  );
}
