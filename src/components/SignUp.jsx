import { NavLink } from "react-router";
import { useForm } from "@tanstack/react-form";

function SignUp() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onSubmit({ value }) {
        if (!value.name) return alert("name is required!");
        if (!value.email) return alert("email is required!");
        if (!value.password) return alert("password is required!");
        if (!value.password) return alert("password is required!");
        if (value.password !== value.confirmPassword)
          return alert("passwords not match!");
        return console.log("form submitted: ", value);
      },
    },
  });

  return (
    <div className="bg-[rgba(0,0,0,0.2)] backdrop-blur-xl p-[5rem] text-white rounded-[3rem] flex flex-col items-center gap-[2rem]">
      <div className="text-[3rem] text-[white] font-bold">SIGN UP</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="flex flex-col gap-[1rem] ">
          <form.Field name="name">
            {(field) => (
              <div>
                <input
                  type="text"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="name"
                  className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
                />
              </div>
            )}
          </form.Field>

          <form.Field name="email">
            {(field) => (
              <div>
                <input
                  type="text"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="email"
                  className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
                />
              </div>
            )}
          </form.Field>

          <form.Field name="password">
            {(field) => (
              <div>
                <input
                  type="password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="password"
                  className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
                />
              </div>
            )}
          </form.Field>

          <form.Field name="confirmPassword">
            {(field) => (
              <div>
                <input
                  type="password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Confirm Password"
                  className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
                />
                {/*conditional rendering pag hindi match ang password*/}
                {field.state.value &&
                  field.state.value !== form.state.values.password && (
                    <div className="text-[white] ">Passwords not match!</div>
                  )}
              </div>
            )}
          </form.Field>

          <div className="flex flex-col gap-[0.5rem] items-center w-full">
            <button
              type="submit"
              className="w-full bg-[darkblue] text-[white] cursor-pointer p-[1rem] rounded-md"
            >
              Sign Up
            </button>
            <NavLink to="/sign" end>
              <div className="font-mono text-[0.9rem]">
                Already have an account?
              </div>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
