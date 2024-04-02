"use client";
import { newsLetterFormServerAction } from "src/app/actions";
import SubmitButton from "../submitBtn/submit";
import { useState } from "react";

export default function NewsLetter({
  className,
  formClasses,
}: {
  className?: string;
  formClasses?: { base?: string; btn?: string };
}) {
  const [formState, setFormState] = useState<{
    err: string | null;
    data: { newSubscriber?: { email: string; id: string } };
  }>({
    err: "",
    data: {},
  });

  const clientFormSection = async (formData: FormData) => {
    if (!formData.get("email"))
      return setFormState({
        err: "Please enter email to subscribe",
        data: {},
      });
    const { data, err } = JSON.parse(
      await newsLetterFormServerAction(formData)
    );
    setFormState({ data, err });
  };

  return (
    <div
      className={`grid lg:grid-cols-[3fr,2fr] my-8 md:my-12 shadow p-4 dark:shadow-[#e7b10a] shadow-[#49c5b6] ${className}`}
    >
      <div className="text-center md:text-left">
        {!formState.err && !formState?.data.newSubscriber?.email && (
          <div>
            <h3 className="text-lg">Get new posts straight to your inbox</h3>
            <p className="text-sm mb-4 lg:mb-0">
              Enter you email to stay up to date
            </p>
          </div>
        )}

        {formState?.err && (
          <div>
            <h3 className="text-lg">
              <span className="dark:text-[#e7b10a] text-[#49c5b6]">
                {formState.err}
              </span>{" "}
            </h3>
          </div>
        )}

        {formState?.data?.newSubscriber?.email && (
          <div>
            <h3 className="text-lg">
              Thanks{" "}
              <span className="dark:text-[#e7b10a] text-[#49c5b6]">
                {formState?.data?.newSubscriber?.email}
              </span>{" "}
              for subscribing
            </h3>
          </div>
        )}
      </div>
      <div>
        <form
          action={clientFormSection}
          className={`flex flex-col md:flex-row lg:flex-col gap-2 item-center ${formClasses?.base}`}
        >
          <input
            type="email"
            name="email"
            className="w-full block h-[40px] border p-2 focus:shadow-md bg-transparent border-[#49c5b6] dark:border-[#e7b10a]  outline-0 rounded placeholder:text-small"
          />
          <SubmitButton copy="subscribe" className={formClasses?.btn} />
        </form>
      </div>
    </div>
  );
}
