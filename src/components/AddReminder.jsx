import { useEffect, useRef } from "react";
import { usePost } from "../contexts/PostContext";

const AddReminder = () => {
  const { handleAddPost } = usePost();

  const formRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleInputChange = () => {
      const formData = new FormData(formRef.current);
      const title = formData.get("title")?.trim();
      const body = formData.get("body")?.trim();
      const isFormValid = title && body;
      if (buttonRef.current) {
        buttonRef.current.disabled = !isFormValid;
      }
    };

    const formEl = formRef.current;
    formEl.addEventListener("input", handleInputChange);

    return () => {
      formEl.removeEventListener("input", handleInputChange);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title")?.trim();
    const body = formData.get("body")?.trim();

    if (!title || !body) return;

    handleAddPost({ title, body });
    e.target.reset();
    if (buttonRef.current) buttonRef.current.disabled = true;
  };

  return (
    <div className="p-3 bg-slate-300 dark:bg-slate-800 rounded-md mb-4">
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="grid gap-4 md:grid-cols-[1fr_3fr_200px]"
      >
        <input
          type="text"
          name="title"
          className="border p-3 rounded-md focus:outline-none border-slate-600 dark:border-slate-300 dark:text-slate-100 dark:placeholder:text-slate-500"
          placeholder="Başlık"
        />
        <textarea
          name="body"
          className="border p-3 rounded-md focus:outline-none border-slate-600 field-sizing-content dark:border-slate-300 dark:text-slate-100 dark:placeholder:text-slate-500"
          placeholder="Not"
        />
        <button
          type="submit"
          ref={buttonRef}
          disabled
          className="bg-slate-800 dark:bg-slate-950 p-4 disabled:bg-slate-500 hover:bg-slate-700 text-white font-bold rounded-md cursor-pointer disabled:cursor-auto"
        >
          Ekle
        </button>
      </form>
    </div>
  );
};

export default AddReminder;
