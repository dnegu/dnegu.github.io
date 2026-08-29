import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center gap-4">
      <a
        href="https://www.linkedin.com/in/david-neyra-gutierrez/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-[#02ffee] transition-all hover:scale-110 drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="h-6 w-6" />
      </a>

      <a
        href="https://github.com/dnegu"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-[#02ffee] transition-all hover:scale-110 drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="GitHub"
      >
        <FaGithub className="h-6 w-6" />
      </a>

      <a
        href="mailto:dneyragu@gmail.com"
        className="text-zinc-400 hover:text-[#02ffee] transition-all hover:scale-110 drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Email"
      >
        <FaEnvelope className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialIcons;
