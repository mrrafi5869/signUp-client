import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const password = form.password.value;
    const file = form.file.files[0];
    const formData = new FormData();
    const data = { name, number, email, password };
    formData.append("file", file);
    formData.append("data", JSON.stringify(data));

    fetch("https://signup-server.vercel.app/user", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          navigate("/thanks");
        }
        console.log(data);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card w-full bg-base-100">
          <form
            className="card-body"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="form-control lg:mr-3">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Mohammad Rafi"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Number</span>
                </label>
                <input
                  type="text"
                  placeholder="018*********"
                  name="number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control lg:mr-3">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="Email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label
                htmlFor="file"
                className="image-label w-full border-2 border-blue-400 block mx-auto border-dashed max-w-xs mt-3 rounded-xl p-7 hover:cursor-pointer text-center"
              >
                <div>
                  <h4 className="text-2xl text-black font-semibold">
                    Upload your resume
                  </h4>
                  <AiOutlineCloudUpload className="text-5xl my-3 text-blue-500 mx-auto"></AiOutlineCloudUpload>
                  <p className="text-xl">Supported Files</p>
                  <p className="text-xl font-semibold text-black">PDF</p>
                </div>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="input input-bordered hidden"
              />
            </div>
            <button className="form-control mt-6 btn btn-primary">
              <Link to="/thanks">SignUp</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
