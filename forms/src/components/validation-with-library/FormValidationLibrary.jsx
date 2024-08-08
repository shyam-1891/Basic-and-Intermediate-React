import { useForm } from "react-hook-form";

function FormValidationLibrary() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <br />
      <hr></hr>
      <br />
      <br />
      <br />
      <form
        className="form"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className={errors.firstName ? `form-group error` : `form-group`}>
          <label className="label" htmlFor="firstName">
            First name
          </label>
          <input
            className="input"
            id="firstName"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <div className="msg">First name is required.</div>
          )}
        </div>
        <div className={errors.lastName ? `form-group error` : `form-group`}>
          <label className="label" htmlFor="lastName">
            Last name
          </label>
          <input
            className="input"
            id="lastName"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <div className="msg">Last name is required.</div>}
        </div>
        <div className={errors.age ? `form-group error` : `form-group`}>
          <label className="label" htmlFor="age">
            Age
          </label>
          <input
            className="input"
            type="number"
            id="age"
            {...register("age", {
              min: 18,
              max: 99,
            })}
          />
          {errors.age && (
            <div className="msg">Age must ne between 18 to 99.</div>
          )}
        </div>

        <select className="input" {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>

        {/* <input className="input" {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>} */}
        <input className="btn" type="submit" />
      </form>
    </>
  );
}

export default FormValidationLibrary;
