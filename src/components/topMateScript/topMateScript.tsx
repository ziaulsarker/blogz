import Script from "next/script";

function TomMateEmbedded({ theme }: { theme: string }) {
  const isLightTheme = theme === "light";

  const btnStyles = isLightTheme
    ? { backgroundColor: "#fff", color: "#202028" }
    : { backgroundColor: "#49c5b6", color: "#fff" };

  const themeBg = isLightTheme ? "49c5b6" : "202028";

  return (
    <Script
      src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
      user-profile={`https://topmate.io/embed/profile/ziaul_sarker?theme=${themeBg}`}
      btn-style={JSON.stringify(btnStyles)}
      embed-version="v1"
      button-text="Let's Connect"
      position-right="30px"
      position-bottom="30px"
      custom-padding="0px"
      custom-font-size="16px"
      custom-font-weight="500"
      custom-width="200px"
      async
      defer
    ></Script>
  );
}

export default TomMateEmbedded;
