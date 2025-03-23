import { NavLink } from "react-router";
import { useForm } from "@tanstack/react-form";

function SignIn() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      if (!value.email) return alert("Email is required!");
      if (!value.password) return alert("Password is required!");

      console.log("Form Submitted: ", value);
    },
  });

  return (
    <div className="bg-[rgba(0,0,0,0.2)] backdrop-blur-xl p-[5rem] text-white rounded-[3rem] flex flex-col items-center gap-[2rem]">
      <div className="text-[3rem] text-[white] font-bold">SIGN IN</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-[1rem]"
      >
        <form.Field name="email">
          {(field) => (
            <input
              type="text"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Email"
              className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
            />
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <input
              type="password"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Password"
              className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
            />
          )}
        </form.Field>

        <div className="flex flex-col gap-[0.5rem] items-center w-full">
          <button
            type="submit"
            className="w-full bg-[darkblue] text-[white] cursor-pointer p-[1rem] rounded-md"
          >
            Sign In
          </button>
          <NavLink to="/sign/up" end>
            <div className="font-mono text-[0.9rem]">
              Don't have an account?
            </div>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
