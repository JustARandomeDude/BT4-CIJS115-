import { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validateName = (value) => value.trim().length >= 2;

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleNameChange = (event) => {
    const inputName = event.target.value;
    setName(inputName);
    setIsNameValid(validateName(inputName));
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };

  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
    setIsPasswordValid(inputPassword.length >= 8);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !validateName(name) ||
      !validateEmail(email) ||
      password.length < 8
    ) {
      return;
    }
    window.alert(`Login information submitted for ${name} (${email}).`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#111827] mb-1.5"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
          required
          className={`w-full px-3.5 py-2.5 bg-white border-2 rounded-lg text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all ${
            isNameValid ? "border-green-600" : "border-red-600"
          }`}
        />
        <p
          className={`mt-2 text-sm ${
            isNameValid ? "text-green-600" : "text-red-600"
          }`}
        >
          {name
            ? isNameValid
              ? "Tên hợp lệ!"
              : "Tên phải có ít nhất 2 ký tự."
            : "Vui lòng nhập tên."}
        </p>
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#111827] mb-1.5"
        >
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="you@example.com"
          value={email}
          onChange={handleEmailChange}
          required
          className={`w-full px-3.5 py-2.5 bg-white border-2 rounded-lg text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all ${
            isValid ? "border-green-600" : "border-red-600"
          }`}
        />
        <p
          className={`mt-2 text-sm ${
            isValid ? "text-green-600" : "text-red-600"
          }`}
        >
          {email
            ? isValid
              ? "Email hợp lệ!"
              : "Email không hợp lệ. Vui lòng kiểm tra lại."
            : "Vui lòng nhập email để kiểm tra."}
        </p>
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-[#111827] mb-1.5"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={handlePasswordChange}
          minLength={8}
          required
          className={`w-full px-3.5 py-2.5 bg-white border-2 rounded-lg text-sm focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all ${
            isPasswordValid ? "border-green-600" : "border-red-600"
          }`}
        />
        <p
          className={`mt-2 text-sm ${
            isPasswordValid ? "text-green-600" : "text-red-600"
          }`}
        >
          {password
            ? isPasswordValid
              ? "Mật khẩu hợp lệ!"
              : "Mật khẩu phải có ít nhất 8 ký tự."
            : "Vui lòng nhập mật khẩu."}
        </p>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label
          htmlFor="remember-me"
          className="flex items-center text-sm text-[#111827] cursor-pointer"
        >
          <input
            id="remember-me"
            type="checkbox"
            className="w-3 h-3 mr-2 cursor-pointer"
          />
          Remember me
        </label>
        <a
          href="#"
          className="text-sm text-[#3b82f6] hover:underline font-medium"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-[#3b82f6] text-white rounded-lg text-base font-semibold hover:opacity-90 transition-opacity cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
