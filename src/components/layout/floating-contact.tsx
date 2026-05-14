import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  Loading03Icon,
  Sent02Icon,
} from "@hugeicons/core-free-icons";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { CONTACT_COPY } from "../../constants/contact.constants";
import { useTheme } from "../../hooks/useTheme";
import type {
  ContactFormState,
  ContactStatus,
  ContactStep,
} from "../../types/contact";
import { SendIcon } from "../icons/send-icon";
import { Popover } from "../ui/popover";

const INITIAL_FORM_STATE: ContactFormState = {
  name: "",
  message: "",
  email: "",
};

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [step, setStep] = useState<ContactStep>("message");
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const { isDark } = useTheme();

  const canContinue = useMemo(() => {
    if (status === "sending") return false;
    if (step === "message") return form.message.trim().length > 0;
    return form.name.trim().length > 0 && form.email.trim().length > 0;
  }, [form.email, form.message, form.name, status, step]);

  const closePopover = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      window.setTimeout(() => {
        setStep("message");
        setStatus("idle");
        setForm(INITIAL_FORM_STATE);
      }, 180);
    }
  };

  useEffect(() => {
    if (status !== "sent") return;

    const timeout = window.setTimeout(() => closePopover(false), 3000);

    return () => window.clearTimeout(timeout);
  }, [status]);

  const sendMessage = async () => {
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          email: form.email.trim(),
          message: form.message.trim(),
          name: form.name.trim(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canContinue) return;

    if (step === "message") {
      setStep("contact");
      setStatus("idle");
      return;
    }

    void sendMessage();
  };

  const primaryLabel =
    step === "message"
      ? CONTACT_COPY.nextLabel
      : status === "sending"
        ? CONTACT_COPY.sendingLabel
        : CONTACT_COPY.sendLabel;

  return (
    <Popover
      className="fixed bottom-6 right-6 z-20 flex size-12 items-center justify-center md:bottom-8 md:right-8"
      contentClassName="w-[min(calc(100vw-2rem),320px)] bg-transparent! p-0! rounded-[24px]"
      onOpenChange={closePopover}
      open={open}
      trigger={({ toggle }) => (
        <button
          className={`flex size-12 cursor-pointer items-center justify-center rounded-full border shadow-[0_10px_35px_#0000001F] transition-colors duration-300 ${
            !isDark
              ? "border-[#111827] bg-[#111827] text-[#F9FAFB]"
              : "border-[#F9FAFB] bg-[#F9FAFB] text-[#101011]"
          }`}
          onClick={toggle}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          type="button"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                className="grid size-6 place-items-center"
                exit={{ opacity: 0, rotate: -45, scale: 0.85 }}
                initial={{ opacity: 0, rotate: 45, scale: 0.85 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ rotate: 90 }}
              >
                <HugeiconsIcon icon={Cancel01Icon} size={24} strokeWidth={2} />
              </motion.span>
            ) : (
              <motion.span
                key="send"
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -35, scale: 0.85 }}
                initial={{ opacity: 0, rotate: 35, scale: 0.85 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <SendIcon active={isHovering} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      )}
    >
      <form
        onSubmit={handleSubmit}
        className={`rounded-[24px] border p-3 shadow-[0_18px_70px_#00000024] ${
          isDark
            ? "border-white/10 bg-[#18181B] text-[#F9FAFB]"
            : "border-black/10 bg-white text-[#111827]"
        }`}
      >
        {status === "sent" ? (
          <div className="relative flex min-h-48 flex-col items-center justify-center overflow-hidden px-2 py-2 text-center">
            <motion.div
              className={`absolute h-24 w-24 rounded-full blur-2xl ${
                isDark ? "bg-white/10" : "bg-black/10"
              }`}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1.2, opacity: [0, 1, 0.35] }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
            <motion.div
              className={`relative grid size-16 place-items-center rounded-full ${
                isDark ? "text-[#F9FAFB]" : "text-[#111827]"
              }`}
              initial={{ opacity: 0, y: 14, rotate: -24, scale: 0.72 }}
              animate={{
                opacity: [0, 1, 1, 0],
                rotate: [-24, -8, 8, 24],
                scale: [0.72, 1, 1, 0.75],
                x: [0, 0, 100, 92],
                y: [14, 0, -80, -88],
              }}
              transition={{
                duration: 2.45,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.28, 0.88, 1],
              }}
            >
              <HugeiconsIcon icon={Sent02Icon} size={40} strokeWidth={2} />
            </motion.div>
            <motion.div
              className="relative mt-5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.32 }}
            >
              <h2 className="text-base font-semibold tracking-[-0.01em]">
                {CONTACT_COPY.successTitle}
              </h2>
              <p
                className={`mt-2 text-xs ${
                  isDark ? "text-white/60" : "text-black/55"
                }`}
              >
                {CONTACT_COPY.successMessage}
              </p>
            </motion.div>
          </div>
        ) : (
          <>
            <div className="min-h-48 px-2 py-2">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold">
                    {CONTACT_COPY.title}
                  </h2>
                </div>
                <button
                  aria-label="Close contact form"
                  className={`grid size-4.5 shrink-0 place-items-center rounded-full transition-transform duration-300 hover:scale-90 ${
                    isDark ? "bg-[#444] text-white" : "bg-[#444] text-white"
                  }`}
                  onClick={() => closePopover(false)}
                  type="button"
                >
                  <HugeiconsIcon icon={Cancel01Icon} size={12} strokeWidth={2} />
                </button>
              </div>
              {step === "message" ? (
                <textarea
                  autoFocus
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  placeholder={CONTACT_COPY.messagePlaceholder}
                  className={`mt-5 min-h-28 w-full resize-none rounded-[18px] border px-4 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-black/35 ${
                    isDark
                      ? "border-white/10 bg-transparent text-[#F9FAFB] placeholder:text-white/35"
                      : "border-black/10 bg-transparent text-[#111827] "
                  }`}
                />
              ) : (
                <div className="mt-5 space-y-3">
                  <input
                    autoFocus
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    placeholder={CONTACT_COPY.namePlaceholder}
                    type="text"
                    className={`h-11 w-full rounded-[16px] border px-4 text-sm outline-none transition-colors placeholder:text-black/35 ${
                      isDark
                        ? "border-white/10 bg-transparent text-[#F9FAFB] placeholder:text-white/35 focus:border-white/35"
                        : "border-black/10 bg-transparent text-[#111827] focus:border-black/35"
                    }`}
                  />
                  <input
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    placeholder={CONTACT_COPY.emailPlaceholder}
                    type="email"
                    className={`h-11 w-full rounded-[16px] border px-4 text-sm outline-none transition-colors placeholder:text-black/35 ${
                      isDark
                        ? "border-white/10 bg-transparent text-[#F9FAFB] placeholder:text-white/35 focus:border-white/35"
                        : "border-black/10 bg-transparent text-[#111827] focus:border-black/35"
                    }`}
                  />
                </div>
              )}
              {status === "error" ? (
                <p className="mt-4 text-xs text-[#DC2626]">
                  {CONTACT_COPY.errorMessage}
                </p>
              ) : null}
            </div>
            <div className="-mt-1 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() =>
                  step === "message" ? closePopover(false) : setStep("message")
                }
                className={`h-12 rounded-full text-sm font-medium ${
                  isDark
                    ? "border border-white/10 bg-transparent text-white/70"
                    : "border border-black/10 bg-white text-black/60"
                }`}
              >
                {step === "message"
                  ? CONTACT_COPY.closeLabel
                  : CONTACT_COPY.backLabel}
              </button>
              <button
                type="submit"
                disabled={!canContinue}
                className={`flex h-12 items-center justify-center gap-2 rounded-full text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40 ${
                  isDark ? "bg-[#F9FAFB] text-[#101011]" : "bg-black text-white"
                }`}
              >
                {status === "sending" ? (
                  <span className="animate-spin">
                    <HugeiconsIcon
                      icon={Loading03Icon}
                      size={18}
                      strokeWidth={2}
                    />
                  </span>
                ) : null}
                {primaryLabel}
              </button>
            </div>
          </>
        )}
      </form>
    </Popover>
  );
}
