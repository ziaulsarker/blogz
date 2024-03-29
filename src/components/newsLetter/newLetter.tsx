"use client";
import { newsLetterFormServerAction } from "src/app/actions";
import SubmitButton from "../submitBtn/submit";
import { useState } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function NewsLetter() {
  const [uiState, setUiState] = useState<{
    data: { newSubscriber?: { email: string; id: string } };
    err: string | null;
  }>({
    data: {},
    err: null,
  });

  const clientFormAction = async (formData: FormData) => {
    const { data, err } = JSON.parse(
      await newsLetterFormServerAction(formData)
    );
    setUiState({ data, err });
  };

  console.log({ uiState });
  return (
    <div className="grid lg:grid-cols-[3fr,2fr] my-8 md:my-12 shadow p-4 dark:shadow-[#e7b10a] shadow-[#49c5b6]">
      {!uiState.data?.newSubscriber?.email ||
        (!uiState.err && (
          <div className="">
            <h3 className="text-lg">Get new posts straight to your inbox</h3>
            <p className="text-sm mb-4 lg:mb-0">
              Enter you email to stay up to date
            </p>
          </div>
        ))}
      {uiState.data?.newSubscriber?.email && (
        <div>
          <h3 className="text-lg">
            Thanks {uiState.data?.newSubscriber?.email} for subscribing!
          </h3>
        </div>
      )}
      {uiState.err && typeof uiState.err === "string" && (
        <div>
          <h3 className="text-lg">{uiState.err}</h3>
        </div>
      )}
      <div>
        <form
          action={clientFormAction}
          className="flex flex-col md:flex-row lg:flex-col gap-2 item-center"
        >
          <input
            type="email"
            name="email"
            className="w-full block h-[40px] border p-2 focus:shadow-md bg-transparent border-[#49c5b6] dark:border-[#e7b10a]  outline-0 rounded placeholder:text-small"
          />
          <SubmitButton copy="subscribe" />
        </form>
      </div>
    </div>
  );
}
