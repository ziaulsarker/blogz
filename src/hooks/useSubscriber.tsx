"use client";
/* eslint-disable @next/next/no-async-client-component */
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { newsLetterFormServerAction } from "src/app/actions";

export const useFormAction = async (
  setter: (state: Dispatch<SetStateAction<{ data: {}; err: null }>>) => {},
  formData: FormData
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
  useEffect(async () => {
    const { data, err } = await newsLetterFormServerAction(formData);
    setter({ data, err });
  }, [formData, setter]);
};
