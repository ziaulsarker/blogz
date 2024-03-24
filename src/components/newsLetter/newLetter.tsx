import { NewsLetterFormServerAction } from "src/app/actions";
import SubmitButton from "../submitBtn/submit";

export default async function NewsLetter() {
  return (
    <div className="grid lg:grid-cols-[3fr,2fr] my-8 md:my-12 shadow p-4 dark:shadow-[#e7b10a] shadow-[#49c5b6]">
      <div className="">
        <h3 className="text-lg">Get new posts straight to your inbox</h3>
        <p className="text-sm mb-4 lg:mb-0">
          Enter you email to stay up to date
        </p>
      </div>
      <div>
        <form
          action={NewsLetterFormServerAction}
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
