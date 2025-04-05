import { NavLink, useNavigate } from "react-router";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

function SignUp() {
  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationKey: ["signupMutation"],
    mutationFn: async (data) => {
      return await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        return res.json();
      });
    },
  });

  const form = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!form.state.values.name) return alert("Name is required!");
    if (!form.state.values.email) return alert("Email is required!");
    if (!form.state.values.password) return alert("Password is required!");
    if (form.state.values.password !== form.state.values.confirmPassword) {
      return alert("Passwords do not match!");
    }
    signupMutation.mutate({
      name: form.state.values.name,
      email: form.state.values.email,
      password: form.state.values.password,
    });
    return;
  };

  useEffect(() => {
    if (signupMutation.isSuccess) {
      console.log("signup response: ", signupMutation.data);
      if (signupMutation.data.message === "Name is already taken")
        alert("name already taken!");
      if (signupMutation.data.signupStatus) {
        alert("Account successfully created!");
        navigate("/sign");
      }
    }
  }, [signupMutation.isSuccess]);

  return (
    <div className="bg-[rgba(0,0,0,0.2)] backdrop-blur-xl p-[5rem] text-white rounded-[3rem] flex flex-col items-center gap-[2rem]">
      <div className="text-[3rem] text-[white] font-bold">SIGN UP</div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[1rem] ">
          <form.Field name="name">
            {(field) => (
              <div>
                <input
                  type="text"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Name"
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
                  placeholder="Email"
                  className="p-2 bg-white text-black placeholder-black border-none outline-none rounded-md"
                />
              </div>
            )}
          </form.Field>

          <form.Field name="password">
            {(field) => (
              <div>
                <input
                  type="Password"
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
                  type="Password"
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
              <div className="font-Poppins text-[0.9rem]">
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
