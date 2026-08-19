import axios from "axios";
import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReCAPTCHA from "react-google-recaptcha";

export interface CaptchaProps {
  link: string;
}

export interface CaptchaHandle {
  execute: () => void;
}

function CaptchaComponent(
  { link }: CaptchaProps,
  ref: ForwardedRef<CaptchaHandle>
) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState("");
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const bypassRecaptcha = process.env.NODE_ENV === "development" && !siteKey;

  useImperativeHandle(ref, () => ({
    execute: () => {
      if (bypassRecaptcha) {
        setModal(true);
        return;
      }

      if (!siteKey) {
        console.error(
          "NEXT_PUBLIC_RECAPTCHA_SITE_KEY is required outside local development"
        );
        return;
      }

      recaptchaRef.current?.execute();
    },
  }));

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }

    const request = {
      token: captchaCode,
      recaptchaAction: "",
    };

    const response = await axios.post("/api/recaptcha", request);
    if (response.data >= 0.6) {
      setModal(true)
    } else {
      console.log("User denied access to slack")
    }

    recaptchaRef.current?.reset();
  };

  const closeModal = () => {
    setModal(false)
  }

  const handleLocationCheck = (event) => {
    if (location.trim().toLowerCase() === 'youngstown') {
      window.open(link, "_blank");
    } else {
      console.log("User denied access to slack")
      setModal(false)
    }
  };

  const updateLocation = (event) => {
    setLocation(event.target.value)
  };

  return (
    <>
    {siteKey && (
      <ReCAPTCHA
        sitekey={siteKey}
        ref={recaptchaRef}
        onChange={(captchaCode) => onReCAPTCHAChange(captchaCode)}
        size="invisible"
      />
    )}
    {modal &&
    <div
      onClick={closeModal} className="absolute inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
    >
      <div
        className="relative mx-auto w-full max-w-[24rem] rounded-lg overflow-hidden shadow-sm"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative flex flex-col bg-white">
          <div className="flex flex-col gap-4 p-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                Code Youngstown is a regional software group. Joining this Slack means you have some connection to our area. Type in the city this group is located in.
              </label>
              <input onChange={updateLocation} type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="" />
              <button onClick={handleLocationCheck} className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default forwardRef<CaptchaHandle, CaptchaProps>(CaptchaComponent);
