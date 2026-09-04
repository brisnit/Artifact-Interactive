"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const INSTITUTION_TYPES = [
  "University",
  "High School",
  "Business",
  "Research Organization",
  "Other",
];

type Status = "idle" | "submitting" | "sent";

/**
 * Contact form. No backend is wired yet, so submission is handled locally and
 * the state is stated plainly rather than pretending a message was delivered.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("sent"), 600);
  };

  if (status === "sent") {
    return (
      <div
        className="rounded-xl border border-signal-500/30 bg-signal-50/60 p-8 lg:p-10"
        role="status"
      >
        <span
          aria-hidden="true"
          className="inline-flex size-10 items-center justify-center rounded-full bg-signal-500 text-white"
        >
          <svg fill="none" height="12" viewBox="0 0 14 11" width="14">
            <path
              d="M1 5.5L5 9.5L13 1.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
        <h2 className="mt-6 text-[1.375rem] font-bold tracking-tight text-ink-900">
          Thank you — your message is ready to send.
        </h2>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate-ai-700">
          This site is not yet connected to a mail service, so nothing has been
          transmitted. Until it is, please write to{" "}
          <a
            className="font-semibold text-signal-600 underline underline-offset-4"
            href="mailto:hello@artifactinteractive.com"
          >
            hello@artifactinteractive.com
          </a>{" "}
          and we will pick the conversation up from there.
        </p>
        <button
          className="mt-7 text-[0.875rem] font-semibold text-signal-600 transition-colors duration-300 hover:text-ink-900"
          onClick={() => setStatus("idle")}
          type="button"
        >
          Return to the form
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field autoComplete="name" label="Name" name="name" required />
        <Field
          autoComplete="organization"
          label="Organization"
          name="organization"
          required
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          autoComplete="organization-title"
          label="Role"
          name="role"
          placeholder="Provost, Dean, Director of L&D…"
        />
        <Field
          autoComplete="email"
          label="Email"
          name="email"
          required
          type="email"
        />
      </div>

      <fieldset>
        <legend className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slate-ai-500">
          Institution type
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {INSTITUTION_TYPES.map((type, i) => (
            <label className="group cursor-pointer" key={type}>
              <input
                className="peer sr-only"
                defaultChecked={i === 0}
                name="institutionType"
                type="radio"
                value={type}
              />
              <span
                className={cn(
                  "inline-block rounded-md border border-ink-900/12 px-4 py-2.5 text-[0.875rem] font-medium text-ink-700",
                  "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "group-hover:border-ink-900/35",
                  "peer-checked:border-signal-600 peer-checked:bg-signal-600 peer-checked:text-white",
                  "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-signal-500",
                )}
              >
                {type}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label
          className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slate-ai-500"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className={cn(
            "mt-3 block w-full resize-y rounded-md border border-ink-900/12 bg-white px-4 py-3.5",
            "text-[0.9375rem] leading-relaxed text-ink-900 placeholder:text-slate-ai-500",
            "transition-colors duration-300 hover:border-ink-900/25 focus:border-signal-500",
          )}
          id="message"
          name="message"
          placeholder="What would your institution most like to understand about itself?"
          rows={6}
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-ink-900/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[34ch] text-[0.75rem] leading-relaxed text-slate-ai-500">
          We use what you send only to respond. Nothing is shared with anyone
          else.
        </p>
        <Button disabled={status === "submitting"} size="lg" type="submit" withArrow>
          {status === "submitting" ? "Sending…" : "Start a Conversation"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slate-ai-500"
        htmlFor={name}
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-signal-500">
            *
          </span>
        )}
      </label>
      <input
        autoComplete={autoComplete}
        className={cn(
          "mt-3 block w-full rounded-md border border-ink-900/12 bg-white px-4 py-3",
          "text-[0.9375rem] text-ink-900 placeholder:text-slate-ai-500",
          "transition-colors duration-300 hover:border-ink-900/25 focus:border-signal-500",
        )}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
}
